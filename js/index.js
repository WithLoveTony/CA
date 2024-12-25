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