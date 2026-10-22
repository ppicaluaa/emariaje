import "../../css/main.css";
import "../../css/pages/productos.css";
import { products } from "./productos-data.js";
import { addToCart } from "../components/carrito.js";
import { initCartUI } from "../components/carrito-ui.js";

const BASE = import.meta.env.BASE_URL;
const IMAGE_ROOT = `${BASE}images/products/mochilas/`;
const PAGE_SIZE = 8;

// Las rutas de recursos se construyen con BASE para que funcionen
// tanto en GitHub Pages (/emariaje/) como en un dominio servido desde la raíz.
const logoImage = document.querySelector(".catalog-header .logo__symbol img");
if (logoImage) logoImage.src = `${BASE}images/brand/logo-emariajes.png`;

const grid = document.querySelector("#productsGrid");
const count = document.querySelector("#productsCount");
const pagination = document.querySelector("#pagination");
const emptyMessage = document.querySelector("#emptyProducts");
const sortSelect = document.querySelector("#sortProducts");
const categoryButtons = [...document.querySelectorAll(".category-filter")];
const minSlider = document.querySelector("#priceMin");
const maxSlider = document.querySelector("#priceMax");
const minLabel = document.querySelector("#priceMinLabel");
const maxLabel = document.querySelector("#priceMaxLabel");
const availableOnly = document.querySelector("#availableOnly");
const colorButtons = [...document.querySelectorAll(".color-option")];
const clearButton = document.querySelector("#clearFilters");
const searchToggle = document.querySelector("#searchToggle");
const searchForm = document.querySelector("#catalogSearchForm");
const searchInput = document.querySelector("#catalogSearch");
const inlineSearch = document.querySelector("#catalogSearchInline");
const inlineSearchInput = document.querySelector("#catalogSearchInlineInput");

const state = {
  category: "all",
  color: "",
  minPrice: 0,
  maxPrice: 500000,
  availableOnly: false,
  query: "",
  sort: "recent",
  page: 1,
  view: "grid",
  favorites: new Set()
};

const money = (value) => new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
}).format(value);

const getPrice = (product) => Number.isFinite(product.price) ? product.price : null;

const prices = products.map(getPrice).filter((p) => p !== null);
const CATALOG_MAX = prices.length ? Math.ceil(Math.max(...prices) / 50000) * 50000 : 500000;

minSlider.max = maxSlider.max = CATALOG_MAX;
maxSlider.value = state.maxPrice = CATALOG_MAX;
maxLabel.textContent = money(CATALOG_MAX);

function getFilteredProducts() {
  let result = products.filter((product) => {
    const categoryMatch = state.category === "all" || product.category === state.category;
    const colorMatch = !state.color || product.color === state.color;
    const price = getPrice(product);
    const priceMatch = price === null || (price >= state.minPrice && price <= state.maxPrice);
    const availabilityMatch = !state.availableOnly || product.available;
    const searchMatch = !state.query || `${product.name} ${product.description}`.toLocaleLowerCase("es").includes(state.query);
    return categoryMatch && colorMatch && priceMatch && availabilityMatch && searchMatch;
  });

  if (state.sort === "price-low") result.sort((a, b) => (getPrice(a) ?? Infinity) - (getPrice(b) ?? Infinity));
  if (state.sort === "price-high") result.sort((a, b) => (getPrice(b) ?? -Infinity) - (getPrice(a) ?? -Infinity));
  if (state.sort === "name") result.sort((a, b) => a.name.localeCompare(b.name, "es"));
  if (state.sort === "recent") result.sort((a, b) => b.id.localeCompare(a.id));

  return result;
}

function cardTemplate(product) {
  const firstImage = product.images[0];
  const imageUrl = `${IMAGE_ROOT}${firstImage}`;
  const favorite = state.favorites.has(product.id);
  const priceText = getPrice(product) === null ? "Precio por definir" : money(product.price);
  const description = product.description || "Descripción pendiente.";
  const categoryLabel = product.category ? `data-category="${product.category}"` : "";

  return `
    <article class="product-card" data-product-id="${product.id}" ${categoryLabel}>
      <div class="product-card__image">
        <a href="${BASE}producto.html?id=${encodeURIComponent(product.id)}" aria-label="Ver detalles de ${escapeHtml(product.name)}">
          <img src="${imageUrl}" alt="${escapeHtml(product.name)}" loading="lazy">
        </a>
        <button class="product-card__favorite" type="button" data-favorite="${product.id}" aria-label="${favorite ? "Quitar de favoritos" : "Agregar a favoritos"}" aria-pressed="${favorite}">
          <i class="${favorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
      </div>
      <div class="product-card__body">
        <h3><a href="${BASE}producto.html?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a></h3>
        <p>${escapeHtml(description)}</p>
        <strong class="product-card__price">${priceText}</strong>
        <button class="product-card__button" type="button" data-add="${product.id}">
          <i class="fa-solid fa-cart-shopping"></i> Añadir al carrito
        </button>
      </div>
    </article>`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderPagination(totalPages) {
  pagination.innerHTML = "";
  if (totalPages <= 1) return;

  const makeButton = (label, page, options = {}) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = label;
    if (options.active) {
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
    }
    if (options.disabled) button.disabled = true;
    button.addEventListener("click", () => {
      state.page = page;
      render();
      document.querySelector(".products-toolbar").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    pagination.append(button);
  };

  makeButton('<i class="fa-solid fa-chevron-left"></i>', Math.max(1, state.page - 1), { disabled: state.page === 1 });
  for (let page = 1; page <= totalPages; page += 1) {
    makeButton(String(page), page, { active: page === state.page });
  }
  makeButton('<i class="fa-solid fa-chevron-right"></i>', Math.min(totalPages, state.page + 1), { disabled: state.page === totalPages });
}

function renderCategoryCounts() {
  document.querySelectorAll("[data-count-category]").forEach((label) => {
    const category = label.dataset.countCategory;
    label.textContent = category === "all"
      ? products.length
      : products.filter((product) => product.category === category).length;
  });
}

function render() {
  const filtered = getFilteredProducts();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  count.textContent = filtered.length;
  grid.innerHTML = visible.map(cardTemplate).join("");
  grid.classList.toggle("products-grid--list", state.view === "list");
  emptyMessage.hidden = filtered.length !== 0;
  renderPagination(totalPages);
  renderCategoryCounts();
}

function resetPage() {
  state.page = 1;
  render();
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    categoryButtons.forEach((item) => item.classList.toggle("active", item === button));
    resetPage();
  });
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  resetPage();
});

minSlider.addEventListener("input", () => {
  state.minPrice = Math.min(Number(minSlider.value), Number(maxSlider.value));
  if (Number(minSlider.value) > Number(maxSlider.value)) minSlider.value = maxSlider.value;
  minLabel.textContent = money(state.minPrice);
  resetPage();
});

maxSlider.addEventListener("input", () => {
  state.maxPrice = Math.max(Number(maxSlider.value), Number(minSlider.value));
  if (Number(maxSlider.value) < Number(minSlider.value)) maxSlider.value = minSlider.value;
  maxLabel.textContent = money(state.maxPrice);
  resetPage();
});

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const wasSelected = button.getAttribute("aria-pressed") === "true";
    colorButtons.forEach((item) => item.setAttribute("aria-pressed", "false"));
    state.color = wasSelected ? "" : button.dataset.color;
    if (!wasSelected) button.setAttribute("aria-pressed", "true");
    resetPage();
  });
});

availableOnly.addEventListener("change", () => {
  state.availableOnly = availableOnly.checked;
  resetPage();
});

function applySearch(value) {
  state.query = value.trim().toLocaleLowerCase("es");
  if (searchInput) searchInput.value = value;
  if (inlineSearchInput) inlineSearchInput.value = value;
  resetPage();
}

searchToggle.addEventListener("click", () => {
  searchForm.hidden = !searchForm.hidden;
  if (!searchForm.hidden) searchInput.focus();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  applySearch(searchInput.value);
  searchForm.hidden = true;
});

searchInput.addEventListener("input", () => applySearch(searchInput.value));
inlineSearchInput.addEventListener("input", () => applySearch(inlineSearchInput.value));

document.querySelector("#searchToggle").addEventListener("click", () => {
  inlineSearch.hidden = searchForm.hidden;
});

document.querySelectorAll(".view-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    document.querySelectorAll(".view-button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    render();
  });
});

clearButton.addEventListener("click", () => {
  state.category = "all";
  state.color = "";
  state.minPrice = 0;
  state.maxPrice = CATALOG_MAX;
  state.availableOnly = false;
  state.query = "";
  state.sort = "recent";
  state.page = 1;

  categoryButtons.forEach((button) => button.classList.toggle("active", button.dataset.category === "all"));
  colorButtons.forEach((button) => button.setAttribute("aria-pressed", "false"));
  minSlider.value = "0";
  maxSlider.value = String(CATALOG_MAX);
  minLabel.textContent = money(0);
  maxLabel.textContent = money(CATALOG_MAX);
  availableOnly.checked = false;
  sortSelect.value = "recent";
  searchInput.value = "";
  inlineSearchInput.value = "";
  render();
});

grid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    render();
    return;
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) {
     const productId = addButton.dataset.add;

     const product = products.find(
        (item) => item.id === productId
     );

     if (product) {
        addToCart(product);
     }
  }
});

const filtersToggle = document.querySelector("#filtersToggle");
const sidebar = document.querySelector("#productsSidebar");

filtersToggle?.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("is-open");
  filtersToggle.setAttribute("aria-expanded", String(isOpen));
});

render();
initCartUI();
