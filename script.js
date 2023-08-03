document.addEventListener("DOMContentLoaded", function () {
  // Función para cambiar entre el modo día y noche
  function toggleDayNightMode() {
    const bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("night-mode");
  }

  // Obtener el botón y agregar el evento click
  const toggleButton = document.getElementById("mode-toggle");
  toggleButton.addEventListener("click", toggleDayNightMode);
});