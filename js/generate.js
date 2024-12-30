const cardsC = document.getElementById("cardContainer");

function generate(codeP){
  nameHeader.innerHTML = `Olá <span>${data[codeP].nome}</span>,<br>Seja bem vind${data[codeP].genero}!`
  const pessoa = data[codeP];
  if (data.hasOwnProperty(codeP)) {
      info = {
          nome: pessoa.nome,
          fotoCard: pessoa.fotoCard.slice(),
          nomeCard: pessoa.nomeCard.slice(),
          textoCard: pessoa.textoCard.slice(),
          genero: pessoa.genero
      };
      nameHeader.innerHTML = `Olá <span>${info.nome}</span>,<br>Seja bem vind${info.genero}!`
      console.log(info.nomeCard[1])
      generateCards()
  } else {
      alert("Código não encontrado");
  }
}

function generateCards(){
    for(let i = 0; i < info.nomeCard.length; i++){
        cardsC.innerHTML += `<article class="card" data-number="${i}">
            <img src="${info.fotoCard[i]}" alt="">
            <h2 class="card-title">${info.nomeCard[i]}</h2>
        </article>`
      }
}