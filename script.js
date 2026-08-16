// Génesis Nails
// Aquí podremos añadir más funciones cuando agreguemos
// las fotos de manos, precios y botón de WhatsApp.

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
