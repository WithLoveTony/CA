// Seleciona o botão
const button = document.getElementById('fullscreenButton');

button.addEventListener('click', () => {
  // Verifica se o navegador suporta a Fullscreen API
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen(); // Ativa o modo tela cheia
  } else if (document.documentElement.webkitRequestFullscreen) { // Para navegadores baseados em WebKit
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { // Para Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.msRequestFullscreen) { // Para IE/Edge
    document.documentElement.msRequestFullscreen();
  } else {
    alert("Seu navegador não suporta o modo de tela cheia.");
  }
});