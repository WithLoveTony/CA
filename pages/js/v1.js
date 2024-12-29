const flowers = document.getElementById('flowers')
const absoluteLogo = document.getElementById('absoluteLogo')
const absoluteText = document.getElementById('absoluteText')
const logoImg = document.getElementById('logoImg')
const pressContinue = document.getElementById('pressContinue')

function start() {
  absoluteLogo.classList.toggle('absoluteLogoAni');
  absoluteText.classList.toggle('absoluteTextAni');
  const c = setTimeout(() => {
    flowers.classList.remove("not-loaded");
    clearTimeout(c);
  }, 500);
};

function appear() {
  absoluteText.classList.remove("disappear");
  absoluteText.classList.toggle("appear");
}
function disappear() {
  absoluteText.classList.remove("appear");
  absoluteText.classList.toggle("disappear");
}

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
    const targetDate = new Date().getTime() + 16000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const seconds = Math.floor(distance / 1000);

      document.getElementById("timer").innerHTML = `${seconds}s`;

      if (distance < 1) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Agora";
        absoluteText.classList.remove("absoluteTextAni");
        disappear()
        const c = setTimeout(() => {
          absoluteText.style.fontWeight = `600`
          absoluteText.style.fontSize = `clamp(26px, 8vw, 54px)`
          absoluteText.innerHTML = `Olá!`
          flowers.style.opacity = '0.3'
          appear()
          welcomeCA()
        }, 2000);
      }
    }, 1000);
  }
}, 1000);

function welcomeCA() {
  const c = setTimeout(() => {
    disappear()
    const c = setTimeout(() => {
      appear()
      absoluteText.innerHTML = `2024 foi um ano e tanto`
      const c = setTimeout(() => {
        disappear()
        const c = setTimeout(() => {
          appear()
          absoluteText.innerHTML = `E eu gostaria de te agradecer por fazer parte desse ano`
          const c = setTimeout(() => {
            disappear()
            const c = setTimeout(() => {
              appear()
              absoluteText.innerHTML = `Mas antes, preciso do seu código`
              const c = setTimeout(() => {
                disappear()
                const c = setTimeout(() => {
                  startPIN()
                }, 2000);
              }, 4000);
            }, 2000);
          }, 4000);
        }, 2000);
      }, 4000);
    }, 2000);
  }, 3000);
}


// música e inciio do código

const audio = document.getElementById('musica');
let bugProtector = 1
document.addEventListener('click', () => {
  logoImg.style.animation = 'fadeOut 1s ease-in forwards'
  pressContinue.style.animation = 'fadeOut 1s ease-in forwards'
  const c = setTimeout(() => {
    audio.play();
    audio.volume = 0.4;
    if (bugProtector < 2) {
      start()
      bugProtector = 2
      console.log(`Exibição protegida`)
    }
  }, 1090);
});

// mudança de textos


