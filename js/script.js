const typed = new Typed(".changing-text", {
  strings: [
    "Kimura", "Arm Bar", "Mataleón", "Guillotina", "Darce Choke",
    "Anaconda Choke", "Triángulo", "Arco y flecha", "Ezekiel",
    "Baseball Choke", "Clock Choke", "Loop Choke", "Buggy Choke"
  ],
  typeSpeed: 150,
  backSpeed: 150,
  backDelay: 1000,
  loop: true,
});

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const days = document.getElementById("dias");
const hours = document.getElementById("horas");
const minutes = document.getElementById("minutos");
const seconds = document.getElementById("segundos");

const cuentaAtras = document.getElementById("cuenta-atras");
const welcome = document.getElementById("welcome");
const changingTextWrapper = document.querySelector(".changing-text").closest("div");

const lanzamiento = new Date("2025-05-25T18:00:00Z").getTime();

const interval = setInterval(() => {
  const ahora = new Date().getTime();
  const tiempoRestante = lanzamiento - ahora;

  if (tiempoRestante <= 0) {
    clearInterval(interval);
    cuentaAtras.classList.add("hidden");
    changingTextWrapper.classList.add("hidden");
    welcome.classList.remove("hidden");
    welcome.style.opacity = 1;
    return;
  }

  let diasRestantes = Math.floor(tiempoRestante / DAY);
  let horasRestantes = Math.floor((tiempoRestante % DAY) / HOUR);
  let minutosRestantes = Math.floor((tiempoRestante % HOUR) / MINUTE);
  let segundosRestantes = Math.floor((tiempoRestante % MINUTE) / SECOND);

  days.innerHTML = diasRestantes.toString().padStart(2, "0");
  hours.innerHTML = horasRestantes.toString().padStart(2, "0");
  minutes.innerHTML = minutosRestantes.toString().padStart(2, "0");
  seconds.innerHTML = segundosRestantes.toString().padStart(2, "0");
}, 1000);
