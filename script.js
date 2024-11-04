document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', toggleAccordion);
});

function toggleAccordion() {
    const content = this.nextElementSibling;
    
    // Usar un temporizador para manejar el evento
    setTimeout(() => {
        this.classList.toggle('active');
        content.classList.toggle('open');
        
        const arrow = this.querySelector('.accordion-arrow');
        if (content.classList.contains('open')) {
            arrow.style.transform = 'rotate(180deg)'; // Flecha hacia arriba
        } else {
            arrow.style.transform = 'rotate(0deg)'; // Flecha hacia abajo
        }
    }, 100); // Retraso de 100 ms
}
