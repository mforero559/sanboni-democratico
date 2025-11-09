import exportar from "./pagina-de-votaciones.js";

document.addEventListener("DOMContentLoaded", () => {
  const cuadros = [
    document.querySelector(".cuadro-candidato-1"),
    document.querySelector(".cuadro-candidato-2"),
    document.querySelector(".cuadro-candidato-3"),
    document.querySelector(".cuadro-candidato-4")
  ];

  const alturaBase = 10;
  const factorAltura = 20;
  
  const voteCounts = JSON.parse(localStorage.getItem("voteCounts")) || {
    1: 0,
    2: 0,
    3: 0,
    4: 0
  };

  const totalVotos = Object.values(voteCounts).reduce((a, b) => a + b, 0);

  for (let i = 1; i <= 4; i++) {
    const votos = voteCounts[i];
    cuadros[i - 1].style.height = `${alturaBase + votos * factorAltura}px`;
  }

  const maxVotos = Math.max(...Object.values(voteCounts));
  const ganadores = Object.keys(voteCounts)
    .filter(k => voteCounts[k] === maxVotos)
    .map(k => `Candidato ${k}`);

  let textoGanador;
  if (totalVotos === 0) {
    textoGanador = "Aún no hay votos.";
  } else if (ganadores.length === 1) {
    textoGanador = `${ganadores[0]} (${maxVotos} votos)`;
  } else {
    textoGanador = `Empate entre ${ganadores.join(" y ")} (${maxVotos} votos cada uno)`;
  }

  document.querySelector(".votes-counter").textContent = `Votos totales: ${totalVotos}`;
  document.querySelector(".ganador").textContent = `Ganador: ${textoGanador}`;
});