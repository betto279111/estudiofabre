// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');
  
    toggleButton.addEventListener('click', () => {
      nav.classList.toggle('active'); // Alterna la clase 'active' para mostrar u ocultar el menú
    });
  });
  