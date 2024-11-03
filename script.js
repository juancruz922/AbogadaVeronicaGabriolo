document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
// JavaScript para el acordeón
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        // Alternar la clase "active" para el botón
        button.classList.toggle('active');

        // Alternar la visibilidad del contenido
        const content = button.nextElementSibling;
        content.classList.toggle('open'); // Alternar la clase "open"
        
        // Cambiar la rotación de la flecha
        const arrow = button.querySelector('.accordion-arrow');
        if (content.classList.contains('open')) {
            arrow.style.transform = 'rotate(180deg)'; // Flecha hacia la derecha
        } else {
            arrow.style.transform = 'rotate(360deg)'; // Flecha hacia abajo
        }
    });
});


