const cardsC = document.getElementById("cardContainer");

function generate(codeP) {
    nameHeader.innerHTML = `Olá <span>${data[codeP].nome}</span>,<br>Seja bem vind${data[codeP].genero}!`
    const pessoa = data[codeP];
    if (data.hasOwnProperty(codeP)) {
        info = {
            nome: pessoa.nome,
            fotoCard: pessoa.fotoCard.slice(),
            nomeCard: pessoa.nomeCard.slice(),
            textoCard: pessoa.textoCard.slice(),
            genero: pessoa.genero,
            musica: pessoa.musica,
            corID: pessoa.corID
        };
        nameHeader.innerHTML = `Olá <span>${info.nome}</span>,<br>Seja bem vind${info.genero}!`;
        console.log(info.nomeCard[1])
        generateCards()
    } else {
        alert("Código não encontrado");
    }
}

const radios = document.querySelectorAll('.nav-radio');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.id == 'memorias') {
            generateCards()
            console.log(`cards`)
        } else if (radio.id == 'musicas') {
            console.log(`musicas`)
            generateMusics()
        }
    });
});

function generateCards() {
    cardsC.innerHTML = ``
    for (let i = 0; i < info.nomeCard.length; i++) {
        cardsC.innerHTML += `<article class="card" data-number="${i}">
            <img src="${info.fotoCard[i]}" alt="">
            <h2 class="card-title">${info.nomeCard[i]}</h2>
        </article>`
    }
}
function generateMusics() {
    cardsC.innerHTML = ``
    for (let i = 0; i < info.musica.length; i++) {
        cardsC.innerHTML += `<iframe style="border-radius:15px" src="${info.musica[i]}" width="100%" height="250" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    }
}

