const sanboniButton = document.querySelector(".js-sanboni-logo-button");
sanboniButton.addEventListener("click", function() {
  window.location.href = "index.html";
});

let popUpHTML = '';

const hamburgerMenuButton = document.querySelector(".js-hamburger-menu-button");
const popUp = document.querySelector('.js-pop-up');
let isContentVisible = false;

hamburgerMenuButton.addEventListener("click", function() {
  if (!isContentVisible) {
    const popUpHTML = `
        <button class="candidatos-button js-candidatos-button">Candidatos y propuestas</button>
        <button class="como-votar-button js-como-votar-button">Como votar concientemente</button>
        <button class="preguntas-button js-preguntas-button">Preguntas</button>
        <button class="votaciones-button js-votaciones-button">Votaciones</button>
        <button class="votaciones-button js-grafica-button">Gráfica votos</button>
      </div>`;
    popUp.innerHTML = popUpHTML;
    popUp.classList.add('visible');
    isContentVisible = true;

    const candidatosButton = popUp.querySelector(".js-candidatos-button");
    candidatosButton.addEventListener("click", function() {
      window.location.href = "propuestas-candidatos.html";
    });

    const HowToVoteButton = popUp.querySelector(".js-como-votar-button");
    HowToVoteButton.addEventListener("click", function() {
      window.location.href = "index.html";
    });

    const preguntasButton = popUp.querySelector(".js-preguntas-button");
    preguntasButton.addEventListener("click", function() {
      window.location.href = "pagina-preguntas.html";
    });

    const votacionesButton = popUp.querySelector(".js-votaciones-button");
    votacionesButton.addEventListener("click", function() {
      window.location.href = "pagina-de-votaciones.html";
    });

    const graficaButton = popUp.querySelector(".js-grafica-button");
    graficaButton.addEventListener("click", function() {
      window.location.href = "votaciones-stadisticas.html";
    });

  } else {
    popUp.innerHTML = '';
    isContentVisible = false;
    popUp.classList.remove('visible');
  }
});

