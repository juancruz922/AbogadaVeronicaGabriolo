
// JavaScript para el acordeón
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', toggleAccordion);
    button.addEventListener('touchstart', toggleAccordion); // Agregar este evento
});

function toggleAccordion() {
    // Alternar la clase "active" para el botón
    this.classList.toggle('active');

    // Alternar la visibilidad del contenido
    const content = this.nextElementSibling;
    content.classList.toggle('open'); // Alternar la clase "open"
    
    // Cambiar la rotación de la flecha
    const arrow = this.querySelector('.accordion-arrow');
    if (content.classList.contains('open')) {
        arrow.style.transform = 'rotate(180deg)'; // Flecha hacia arriba
    } else {
        arrow.style.transform = 'rotate(0deg)'; // Flecha hacia abajo
    }
}


