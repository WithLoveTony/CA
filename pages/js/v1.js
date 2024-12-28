
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
// Define a data final
const targetDate = new Date("December 30, 2024 20:00:00").getTime();

// Atualiza o cronômetro a cada segundo
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calcula dias, horas, minutos e segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe o cronômetro no elemento HTML
  document.getElementById("timer").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Para o cronômetro quando o tempo acabar
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "Em breve...";
  }
}, 1000);  