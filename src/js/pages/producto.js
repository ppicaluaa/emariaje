/* ============================================================
   EMARIAJES - DETALLE Y GALERÍA DEL PRODUCTO
   ------------------------------------------------------------
   Funcionalidades:
   1. Identificar la mochila mediante el parámetro ?id=.
   2. Cargar sus datos desde productos-data.js.
   3. Mostrar la fotografía principal.
   4. Crear miniaturas de las demás fotografías.
   5. Cambiar de fotografía al pulsar una miniatura.
   6. Navegar con las flechas anterior y siguiente.
   7. Mostrar un mensaje si el producto no existe.
   ============================================================ */


/* ============================================================
   1. IMPORTACIÓN DE ESTILOS Y DATOS
   ============================================================ */

// Estilos globales de EMARIAJES.
import "../../css/main.css";

// Estilos exclusivos de la página de detalle.
import "../../css/pages/producto.css";

// Catálogo compartido con la página de productos.
import { products } from "./productos-data.js";

import { addToCart } from "../components/carrito.js";

import { initCartUI } from "../components/carrito-ui.js";


/* ============================================================
   2. CONFIGURACIÓN DE RUTAS
   ============================================================ */

// BASE permite construir las rutas tanto en desarrollo
// como cuando el sitio se publica en GitHub Pages.
const BASE = import.meta.env.BASE_URL;

// Carpeta que contiene las fotografías de las mochilas.
const IMAGE_ROOT = `${BASE}images/products/mochilas/`;


/* ============================================================
   3. REFERENCIAS A LOS ELEMENTOS HTML
   ============================================================ */

// Contenedor principal del detalle.
const productDetail = document.querySelector("#productDetail");

// Elemento de la fotografía principal.
const mainImage = document.querySelector("#productMainImage");

// Contenedor donde se generan las miniaturas.
const thumbnailsContainer = document.querySelector("#productThumbnails");

// Nombre de la mochila.
const productName = document.querySelector("#productName");

// Precio de la mochila.
const productPrice = document.querySelector("#productPrice");

// Descripción de la mochila.
const productDescription = document.querySelector("#productDescription");

// Botón para agregar la mochila al carrito.
const addToCartButton = document.querySelector("#addToCartButton");

// Nombre del producto en la ruta de navegación.
const productBreadcrumb = document.querySelector("#productBreadcrumb");

// Contador de fotografías.
const imageCounter = document.querySelector("#imageCounter");

// Botones de navegación de la galería.
const previousButton = document.querySelector("#previousImage");
const nextButton = document.querySelector("#nextImage");

// Contenedor del mensaje de producto no encontrado.
const notFoundMessage = document.querySelector("#productNotFound");


// Elementos de búsqueda del encabezado.
const searchToggle = document.querySelector("#searchToggle");
const searchForm = document.querySelector("#detailSearchForm");
const searchInput = document.querySelector("#detailSearchInput");

// Mostrar u ocultar el buscador.
searchToggle?.addEventListener("click", () => {
  searchForm.hidden = !searchForm.hidden;
  searchToggle.setAttribute("aria-expanded", String(!searchForm.hidden));

  if (!searchForm.hidden) {
    searchInput.focus();
  }
});

// Buscar en el catálogo.
searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    searchInput.focus();
    return;
  }

  const catalogUrl = new URL(
    "./productos/productos.html",
    window.location.href
  );

  catalogUrl.searchParams.set("q", query);

  window.location.href = catalogUrl.href;
});


/* ============================================================
   4. ESTADO DE LA GALERÍA
   ============================================================ */

// Guarda la fotografía que se encuentra seleccionada.
let currentImageIndex = 0;

// Guardará la mochila que corresponde al identificador de la URL.
let currentProduct = null;


/* ============================================================
   5. FUNCIONES AUXILIARES
   ============================================================ */

/**
 * Convierte un precio numérico a pesos colombianos.
 *
 * Si el precio está pendiente, la página mostrará
 * "Precio por definir".
 */
function formatPrice(price) {

  if (!Number.isFinite(price)) {
    return "Precio por definir";
  }

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(price);

}


/**
 * Escapa caracteres especiales antes de insertar texto
 * procedente de los datos dentro del HTML.
 */
function escapeHtml(value = "") {

  return String(value).replace(/[&<>"']/g, (character) => ({

    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"

  })[character]);

}


/**
 * Devuelve la ruta completa de una fotografía.
 *
 * El arreglo images solo almacena los nombres de archivo.
 * Esta función añade la carpeta donde están guardadas.
 */
function getImageUrl(imageName) {

  return `${IMAGE_ROOT}${encodeURIComponent(imageName)}`;

}


/* ============================================================
   6. OBTENER EL PRODUCTO SELECCIONADO
   ============================================================ */

// Lee el parámetro id de la dirección del navegador.
// Ejemplo: producto.html?id=moc-005
const urlParameters = new URLSearchParams(window.location.search);

const productId = urlParameters.get("id");

// Busca la mochila correspondiente dentro del catálogo.
currentProduct = products.find((product) => product.id === productId);


/* ============================================================
   7. MOSTRAR LOS DATOS DEL PRODUCTO
   ============================================================ */

/**
 * Carga el nombre, precio y descripción de la mochila.
 */
function renderProductInformation() {

  // Nombre del producto.
  productName.textContent = currentProduct.name;

  // Precio formateado.
  productPrice.textContent = formatPrice(currentProduct.price);

  // Descripción; utiliza un texto provisional si está vacía.
  productDescription.textContent =
    currentProduct.description || "Descripción pendiente.";

  // Actualiza la ruta de navegación.
  productBreadcrumb.textContent = currentProduct.name;

  // Actualiza el título de la pestaña del navegador.
  document.title = `${currentProduct.name} | EMARIAJES`;

}


/* ============================================================
   8. MOSTRAR UNA FOTOGRAFÍA DE LA GALERÍA
   ============================================================ */

/**
 * Cambia la imagen principal según la posición seleccionada.
 *
 * También actualiza:
 * - La miniatura activa.
 * - El texto alternativo.
 * - El contador de fotografías.
 * - El estado de las flechas de navegación.
 */
function showImage(index) {

  // Evita continuar si no hay fotografías disponibles.
  if (!currentProduct.images.length) {
    return;
  }

  // Guarda la posición seleccionada.
  currentImageIndex = index;

  // Obtiene el nombre del archivo de la fotografía actual.
  const imageName = currentProduct.images[currentImageIndex];

  // Actualiza la imagen principal.
  mainImage.src = getImageUrl(imageName);

  // Proporciona un texto alternativo descriptivo.
  mainImage.alt =
    `${currentProduct.name}, fotografía ${currentImageIndex + 1}`;

  // Actualiza el contador.
  imageCounter.textContent =
    `${currentImageIndex + 1} / ${currentProduct.images.length}`;

  // Resalta la miniatura correspondiente a la imagen actual.
  const thumbnails = thumbnailsContainer.querySelectorAll(
    ".product-gallery__thumbnail"
  );

  thumbnails.forEach((thumbnail, thumbnailIndex) => {

    const isActive = thumbnailIndex === currentImageIndex;

    thumbnail.classList.toggle("active", isActive);

    thumbnail.setAttribute(
      "aria-pressed",
      String(isActive)
    );

  });

  // Deshabilita las flechas si solo hay una fotografía.
  const hasMultipleImages = currentProduct.images.length > 1;

  previousButton.disabled = !hasMultipleImages;
  nextButton.disabled = !hasMultipleImages;

}


/* ============================================================
   9. CREAR LAS MINIATURAS DE LA GALERÍA
   ============================================================ */

/**
 * Recorre el arreglo images de la mochila y crea
 * un botón con su fotografía correspondiente.
 *
 * Al pulsar un botón, esa fotografía pasa a ser la principal.
 */
function renderThumbnails() {

  // Limpia el contenedor antes de generar las miniaturas.
  thumbnailsContainer.innerHTML = "";

  // Recorre todas las fotografías registradas para la mochila.
  currentProduct.images.forEach((imageName, index) => {

    // Crea el botón que contendrá la miniatura.
    const thumbnail = document.createElement("button");

    thumbnail.type = "button";

    thumbnail.className = "product-gallery__thumbnail";

    thumbnail.setAttribute(
      "aria-label",
      `Ver fotografía ${index + 1} de ${currentProduct.name}`
    );

    thumbnail.setAttribute("aria-pressed", "false");

    // Crea el elemento de imagen de la miniatura.
    const thumbnailImage = document.createElement("img");

    thumbnailImage.src = getImageUrl(imageName);

    thumbnailImage.alt =
      `Vista ${index + 1} de ${currentProduct.name}`;

    thumbnailImage.loading = "lazy";

    // Inserta la imagen dentro del botón.
    thumbnail.appendChild(thumbnailImage);

    // Cuando se pulsa la miniatura, cambia la imagen principal.
    thumbnail.addEventListener("click", () => {

      showImage(index);

    });

    // Añade la miniatura al contenedor de la galería.
    thumbnailsContainer.appendChild(thumbnail);

  });

}


/* ============================================================
   10. NAVEGACIÓN ENTRE FOTOGRAFÍAS
   ============================================================ */

// Muestra la fotografía anterior.
previousButton.addEventListener("click", () => {

  const totalImages = currentProduct.images.length;

  const previousIndex =
    (currentImageIndex - 1 + totalImages) % totalImages;

  showImage(previousIndex);

});


// Muestra la fotografía siguiente.
nextButton.addEventListener("click", () => {

  const totalImages = currentProduct.images.length;

  const nextIndex =
    (currentImageIndex + 1) % totalImages;

  showImage(nextIndex);

});


/* ============================================================
   11. INICIALIZAR LA PÁGINA
   ============================================================ */

/**
 * Comprueba que el producto exista y, si existe,
 * carga la información y prepara la galería.
 */
function initializeProductPage() {

  // Si el identificador no corresponde a una mochila,
  // oculta el contenido principal y muestra el aviso.
  if (!currentProduct) {

    productDetail.hidden = true;

    notFoundMessage.hidden = false;

    return;

  }

  // Evita errores si el producto no tiene fotografías.
  if (
    !Array.isArray(currentProduct.images) ||
    currentProduct.images.length === 0
  ) {

    productDetail.hidden = true;

    notFoundMessage.hidden = false;

    return;

  }

  // Carga los datos del producto.
  renderProductInformation();

  // Genera las miniaturas.
  renderThumbnails();

  // Muestra inicialmente la primera fotografía.
  showImage(0);

}

// Ejecuta la inicialización de la página.
initializeProductPage();

// Inicializar el panel del carrito en la página de detalle.
initCartUI();


/* ============================================================
   12. AGREGAR EL PRODUCTO AL CARRITO
   ============================================================ */

// Comprueba que el botón exista en la página.
if (addToCartButton) {

  // Detecta cuando el cliente hace clic.
  addToCartButton.addEventListener("click", () => {

    // Comprueba que exista una mochila seleccionada.
    if (currentProduct) {

      // Agrega la mochila al carrito existente.
      addToCart(currentProduct);

    }

  });

}

/* ============================================================
   FIN DEL ARCHIVO
   ============================================================ */