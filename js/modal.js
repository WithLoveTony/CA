const cards = document.querySelectorAll('.card');
const modal = document.getElementById('cardModal');
const modalTitle = document.getElementById('modalTitle');
const closeButton = document.querySelector('.close-button');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const number = card.getAttribute('data-number');
        modalTitle.textContent = `Card ${number}`;
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
