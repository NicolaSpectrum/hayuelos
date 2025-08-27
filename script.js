// Carrusel automático del banner
let currentIndex = 0;
const images = document.querySelectorAll('.banner img');

setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}, 4000);

// Función para expandir/comprimir detalles del comercio
function toggleDetails(element) {
    const detalle = element.nextElementSibling;
    detalle.classList.toggle('open');
}
