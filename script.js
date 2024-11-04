document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', toggleAccordion);
});

function toggleAccordion() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    content.classList.toggle('open');
    
    const arrow = this.querySelector('.accordion-arrow');
    if (content.classList.contains('open')) {
        arrow.style.transform = 'rotate(180deg)'; // Flecha hacia arriba
    } else {
        arrow.style.transform = 'rotate(0deg)'; // Flecha hacia abajo
    }
}
