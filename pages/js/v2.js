
let ctx, thetas = [];
const w = 1200, h = 1200, TAU = 2*Math.PI, MAX_R = 600;
const mw = parseInt(w/2), mh = parseInt(h/2);

const colors = ["#00204a22","#00579222","#00bbf022","#fdb44b22"];

function setup(){
	let r, canvas = document.createElement('canvas');
	canvas.width = w;
	canvas.height = h;
	document.body.appendChild(canvas);
	ctx = canvas.getContext('2d');

	for(r = 1; r < MAX_R; r++) thetas[r] = Math.random()*TAU;
	requestAnimationFrame(draw);
}

function draw(){
	let r, p, x, y;

	for(r = 1; r < MAX_R; r++){
		p = 2*Math.random()*Math.PI/r;
		thetas[r] += (Math.random() > 0.5) ? p : -p;
		x = r*Math.cos(thetas[r]);
		y = r*Math.sin(thetas[r]);
		
		ctx.fillStyle = colors[(r) % colors.length];
		ctx.beginPath();
    
		ctx.arc(mw + x, mw + y, 2, 0, TAU, true);
		ctx.arc(mh - x, mh + y, 2, 0, TAU, true);
		ctx.fill();
	}
	requestAnimationFrame(draw);
}

window.onload = setup;

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

const audio = document.getElementById('musica');
    document.addEventListener('click', () => {
      audio.play();
      audio.volume = 0.4;
    });