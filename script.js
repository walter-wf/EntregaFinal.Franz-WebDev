/* document.addEventListener("DOMContentLoaded", function () {
  // Función para cambiar entre el modo día y noche
  function toggleDayNightMode() {
    const bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("night-mode");
  }

  // Obtener el botón y agregar el evento click
  const toggleButton = document.getElementById("mode-toggle");
  toggleButton.addEventListener("click", toggleDayNightMode);
}); */

// Obtener elementos del DOM
const hamburgerBtn = document.getElementById('hamburger-btn');
const navbarNav = document.getElementById('navbarNav');

// Agregar evento click al botón hamburguesa
hamburgerBtn.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});