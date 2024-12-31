const cards = document.querySelectorAll('.card');
const modal = document.getElementById('cardModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeButton = document.querySelector('.close-button');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const number = card.getAttribute('data-number');
        modalTitle.innerHTML = `${info.nomeCard[number]}`;
        modalText.innerHTML = `<img id="modalImg" src="${info.fotoCard[number]}">${info.textoCard[number]}`;
        modal.style.display = 'block';
        document.body.classList.add("no-scroll");
    });
    
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove("no-scroll");
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove("no-scroll");
    }
});
