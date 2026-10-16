
/* ============================================================
   EMARIAJES - CARRITO DE COMPRAS
   ------------------------------------------------------------
   Funciones:
   1. Guardar productos en localStorage.
   2. Agregar mochilas al carrito.
   3. Actualizar cantidades y eliminar productos.
   4. Calcular el subtotal.
   5. Actualizar el contador del encabezado.
   ============================================================ */

const STORAGE_KEY = "emariajes-carrito";

// Ruta base para GitHub Pages y Netlify.
const BASE = import.meta.env.BASE_URL;

// Obtener el carrito guardado.
export function getCart() {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    const cart = savedCart ? JSON.parse(savedCart) : [];

    return Array.isArray(cart) ? cart : [];
  } catch (error) {
    console.error("No se pudo leer el carrito:", error);
    return [];
  }
}

// Guardar el carrito y actualizar el contador.
export function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));

  updateCartCount();

  // Avisar a otras páginas del mismo sitio.
  window.dispatchEvent(new CustomEvent("cartUpdated"));
}

// Agregar una mochila al carrito.
export function addToCart(product) {
  if (!product || !product.id) {
    return false;
  }

  if (!product.available) {
    alert("Esta mochila no está disponible actualmente.");
    return false;
  }

  if (!Number.isFinite(product.price) || product.price <= 0) {
    alert("El precio de esta mochila está pendiente.");
    return false;
  }

  const cart = getCart();

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] ?? "",
      quantity: 1
    });
  }

  saveCart(cart);

  alert(`${product.name} se agregó al carrito.`);

  return true;
}

// Cambiar la cantidad de una mochila.
export function updateQuantity(productId, quantity) {
  const cart = getCart();

  const product = cart.find(
    (item) => item.id === productId
  );

  if (!product) {
    return;
  }

  const newQuantity = Math.floor(Number(quantity));

  if (!Number.isFinite(newQuantity) || newQuantity < 1) {
    return;
  }

  product.quantity = newQuantity;

  saveCart(cart);
}

// Eliminar una mochila.
export function removeFromCart(productId) {
  const cart = getCart().filter(
    (item) => item.id !== productId
  );

  saveCart(cart);
}

// Vaciar el carrito.
export function clearCart() {
  saveCart([]);
}

// Calcular el número total de unidades.
export function getCartCount() {
  return getCart().reduce(
    (total, item) => total + item.quantity,
    0
  );
}

// Calcular el importe total.
export function getCartTotal() {
  return getCart().reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

// Formatear importes en pesos colombianos.
export function formatCurrency(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

// Actualizar todos los contadores presentes en la página.
export function updateCartCount() {
  const count = getCartCount();

  document.querySelectorAll("#cartCount").forEach((counter) => {
    counter.textContent = count;
  });
}

// Construir la ruta de una fotografía.
export function getCartImageUrl(imageName) {
  return `${BASE}images/products/mochilas/${encodeURIComponent(imageName)}`;
}

// Inicializar el contador al cargar cualquier página que importe este módulo.
updateCartCount();

window.addEventListener("storage", (event) => {
  if (event.key === STORAGE_KEY) {
    updateCartCount();
  }
});
