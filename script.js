const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    let currentImage = 0;
    const images = card.querySelectorAll('.image');

    card.addEventListener('mouseover', () => {
        currentImage = (currentImage + 1) % images.length;
        images.forEach((img, index) => {
            img.classList.toggle('hidden', index !== currentImage);
        });
    });
});


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
