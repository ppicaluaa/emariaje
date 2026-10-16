
import {
  getCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  getCartTotal,
  formatCurrency,
  getCartImageUrl
} from "./carrito.js";

import "../../css/components/carrito-ui.css";

const SHIPPING_COST = 15000; // Valor provisional en COP

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

export function initCartUI() {
  const cartButton = document.querySelector(".header__cart");

  if (!cartButton || document.querySelector("#cartDrawer")) {
    return;
  }

  cartButton.setAttribute("aria-controls", "cartDrawer");
  cartButton.setAttribute("aria-expanded", "false");

  document.body.insertAdjacentHTML("beforeend", `
    <div class="cart-overlay" id="cartOverlay" hidden></div>

    <aside
      class="cart-drawer"
      id="cartDrawer"
      aria-label="Carrito de compras"
      aria-hidden="true"
      inert
    >
      <header class="cart-drawer__header">
        <div>
          <p class="cart-drawer__eyebrow">EMARIAJES</p>
          <h2>Tu carrito</h2>
        </div>

        <button
          class="cart-drawer__close"
          type="button"
          aria-label="Cerrar carrito"
          data-cart-close
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </header>

      <div class="cart-drawer__body" id="cartItems"></div>

      <footer class="cart-drawer__footer" id="cartFooter"></footer>
    </aside>
  `);

  const drawer = document.querySelector("#cartDrawer");
  const overlay = document.querySelector("#cartOverlay");
  const itemsContainer = document.querySelector("#cartItems");
  const footer = document.querySelector("#cartFooter");

  function openCart() {
    renderCart();

    overlay.hidden = false;
    drawer.inert = false;
    drawer.setAttribute("aria-hidden", "false");
    cartButton.setAttribute("aria-expanded", "true");

    requestAnimationFrame(() => {
      drawer.classList.add("is-open");
      overlay.classList.add("is-visible");
    });

    document.body.classList.add("cart-open");
    drawer.querySelector("[data-cart-close]").focus();
  }

  function closeCart() {
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    drawer.setAttribute("aria-hidden", "true");
    drawer.inert = true;
    cartButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("cart-open");
    cartButton.focus();

    window.setTimeout(() => {
      if (drawer.getAttribute("aria-hidden") === "true") {
        overlay.hidden = true;
      }
    }, 250);
  }

  function renderCart() {
    const cart = getCart();

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty">
          <i class="fa-solid fa-bag-shopping"></i>
          <h3>Tu carrito está vacío</h3>
          <p>Explora nuestras mochilas artesanales y encuentra tu favorita.</p>
          <button class="cart-button cart-button--primary"
            type="button" data-cart-close>
            Seguir comprando
          </button>
        </div>
      `;

      footer.innerHTML = "";
      return;
    }

    itemsContainer.innerHTML = cart.map((item) => {
      const imageUrl = getCartImageUrl(item.image);

      return `
        <article class="cart-item" data-cart-item="${escapeHtml(item.id)}">
          <img
            class="cart-item__image"
            src="${escapeHtml(imageUrl)}"
            alt="${escapeHtml(item.name)}"
          >

          <div class="cart-item__info">
            <h3>${escapeHtml(item.name)}</h3>
            <p class="cart-item__price">${formatCurrency(item.price)}</p>

            <div class="cart-item__actions">
              <div class="cart-quantity" aria-label="Cantidad">
                <button
                  type="button"
                  data-quantity-minus="${escapeHtml(item.id)}"
                  aria-label="Disminuir cantidad"
                  ${item.quantity <= 1 ? "disabled" : ""}
                >−</button>

                <span>${item.quantity}</span>

                <button
                  type="button"
                  data-quantity-plus="${escapeHtml(item.id)}"
                  aria-label="Aumentar cantidad"
                >+</button>
              </div>

              <button
                class="cart-item__remove"
                type="button"
                data-remove="${escapeHtml(item.id)}"
              >
                Eliminar
              </button>
            </div>
          </div>

          <strong class="cart-item__subtotal">
            ${formatCurrency(item.price * item.quantity)}
          </strong>
        </article>
      `;
    }).join("");

    
    const subtotal = getCartTotal();
    const total = subtotal + SHIPPING_COST;

    footer.innerHTML = `
    <div class="cart-cost-row">
        <span>Subtotal de las mochilas</span>
        <strong>${formatCurrency(subtotal)}</strong>
    </div>

    <div class="cart-cost-row">
        <span>Envío</span>
        <strong>${formatCurrency(SHIPPING_COST)}</strong>
    </div>

    <div class="cart-total">
        <span>Total a pagar</span>
        <strong>${formatCurrency(total)}</strong>
    </div>

    <p class="cart-shipping-note">
        El precio de las mochilas incluye los costos comerciales.
        El envío se muestra por separado.
    </p>

    <button
        class="cart-button cart-button--primary"
        type="button"
        data-cart-checkout
        disabled
        title="Próximamente"
    >
        Continuar al pago
    </button>

    <button
        class="cart-button cart-button--secondary"
        type="button"
        data-cart-clear
    >
        Vaciar carrito
    </button>
    `;
  }

  cartButton.addEventListener("click", openCart);

  drawer.addEventListener("click", (event) => {
    if (event.target.closest("[data-cart-close]")) {
      closeCart();
      return;
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
      renderCart();
      return;
    }

    const minusButton = event.target.closest("[data-quantity-minus]");
    if (minusButton) {
      const item = getCart().find(
        (product) => product.id === minusButton.dataset.quantityMinus
      );

      if (item && item.quantity > 1) {
        updateQuantity(item.id, item.quantity - 1);
        renderCart();
      }
      return;
    }

    const plusButton = event.target.closest("[data-quantity-plus]");
    if (plusButton) {
      const item = getCart().find(
        (product) => product.id === plusButton.dataset.quantityPlus
      );

      if (item) {
        updateQuantity(item.id, item.quantity + 1);
        renderCart();
      }
      return;
    }

    const clearButton = event.target.closest("[data-cart-clear]");
    if (clearButton) {
      if (window.confirm("¿Quieres eliminar todos los productos del carrito?")) {
        clearCart();
        renderCart();
      }
    }
  });

  overlay.addEventListener("click", closeCart);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" &&
        drawer.getAttribute("aria-hidden") === "false") {
      closeCart();
    }
  });

  window.addEventListener("cartUpdated", renderCart);
}
