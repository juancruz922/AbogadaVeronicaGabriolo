document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del clic
        toggleAccordion.call(this); // Usa el contexto correcto
    });
});

function toggleAccordion() {
    const content = this.nextElementSibling;

    this.classList.toggle('active');
    content.classList.toggle('open');

    const arrow = this.querySelector('.accordion-arrow');
    if (content.classList.contains('open')) {
        arrow.style.transform = 'rotate(180deg)'; // Flecha hacia arriba
    } else {
        arrow.style.transform = 'rotate(0deg)'; // Flecha hacia abajo
    }
}
