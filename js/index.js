function updateTime() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('time').textContent = `${hours}:${minutes}`;
}

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = `${currentYear}`;

setInterval(updateTime, 1000);
updateTime();

const pinCode = localStorage.getItem("pin");
const nameHeader = document.getElementById("name");
const header = document.getElementById("header");
const pressContinue = document.getElementById("pressContinue");
let bugProtector = 1

document.addEventListener('click', () => {
  if (bugProtector < 2) {
    // MUDAR A SETINHA PARA FUNCIONAR
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else {
      alert("Seu navegador não suporta o modo de tela cheia.");
    }
    bugProtector = 2
    console.log(`Exibição protegida`)
    const c = setTimeout(() => {
      mailStart()
      pressContinue.style.display = `none`
    }, 1090);
  }
});

function mailStart() {
  document.body.classList.toggle(`${info.corID}`);
  header.style.display = `block`
  cardContainer.style.display = `flex`
}
// mailStart()
if (pinCode == '1004') {
  generate('SR')
} else if (pinCode == '1705') {
  generate("TH")
} else if (pinCode == '0907') {
  generate('JV')
} else if (pinCode == '2302') {
  generate('JU')
}


// const audio = document.getElementById('musica');
// document.addEventListener('click', () => {
//   const c = setTimeout(() => {
//     audio.play();
//     audio.volume = 0.1;
//   })
// })