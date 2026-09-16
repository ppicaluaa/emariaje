import "../css/main.css";

/* ============================================================
   EMARIAJE - JAVASCRIPT PRINCIPAL
   ------------------------------------------------------------
   Funcionalidades:
   1. Menú responsive para celulares.
   2. Cierre automático del menú.
   3. Resaltado de la sección activa.
   4. Año automático en el footer.
   5. Interacción inicial de los botones de productos.
   ============================================================ */


/* ============================================================
   1. MENÚ RESPONSIVE
   ============================================================ */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const menuIsOpen = mainNav.classList.toggle("nav--open");

        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars", !menuIsOpen);
            icon.classList.toggle("fa-xmark", menuIsOpen);
        }
    });
}


/* ============================================================
   2. CERRAR EL MENÚ AL SELECCIONAR UNA OPCIÓN
   ============================================================ */

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (mainNav) {
            mainNav.classList.remove("nav--open");
        }

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
    });

});


/* ============================================================
   3. RESALTAR LA SECCIÓN ACTIVA
   ============================================================ */

const sections = document.querySelectorAll("main section[id]");

const observerOptions = {
    root: null,
    rootMargin: "-30% 0px -60% 0px",
    threshold: 0
};

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const sectionId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                    const linkTarget = link.getAttribute("href");

                    if (linkTarget === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }

        });

    },
    observerOptions
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* ============================================================
   4. AÑO AUTOMÁTICO DEL FOOTER
   ============================================================ */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ============================================================
   5. INTERACCIÓN DE LOS BOTONES DE PRODUCTOS
   ============================================================ */

const cartButtons = document.querySelectorAll(".cart-button");

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const productName = button.dataset.product;

        alert(
            `${productName} seleccionado. Próximamente conectaremos este botón con el proceso de compra.`
        );
    });

});


/* ============================================================
   FIN DEL ARCHIVO JAVASCRIPT
   ============================================================ */
