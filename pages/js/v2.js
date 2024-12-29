const flowers = document.getElementById('flowers')
const absoluteLogo = document.getElementById('absoluteLogo')
const absoluteText = document.getElementById('absoluteText')
const logoImg = document.getElementById('logoImg')
const pressContinue = document.getElementById('pressContinue')

function start(){
  absoluteLogo.classList.toggle('absoluteLogoAni');
  absoluteText.classList.toggle('absoluteTextAni');
  const c = setTimeout(() => {
    flowers.classList.remove("not-loaded");
    clearTimeout(c);
  }, 500);
};


// cronometro abaixo
const targetDate = new Date("December 31, 2024 00:01:00").getTime();
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Para o cronômetro quando o tempo acabar
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "Em breve...";
  }
}, 1000);

const audio = document.getElementById('musica');
document.addEventListener('click', () => {
  logoImg.style.animation = 'fadeOut 1s ease-in forwards'
  pressContinue.style.animation = 'fadeOut 1s ease-in forwards'
  const c = setTimeout(() => {
    audio.play();
    audio.volume = 0.4;
    start()
  }, 1090);
});