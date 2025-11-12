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



const slider = document.querySelector('.ethical-slider');
const footer = document.querySelector('.ethical-footer');

function startScroll() {
  const parentWidth = slider.parentElement.offsetWidth;
  const contentWidth = slider.scrollWidth;

  const speed = 100; // px/segundo
  const duration = (contentWidth + parentWidth) / speed; // duración total

  // Animación de texto
  slider.style.animation = `scrollContent ${duration}s linear infinite`;

  // Crear keyframes dinámicos para el texto
  let styleEl = document.getElementById('dynamicScroll');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'dynamicScroll';
    document.head.appendChild(styleEl);
  }
  styleEl.innerHTML = `
    @keyframes scrollContent {
      0% { transform: translateX(${parentWidth}px); }
      100% { transform: translateX(-${contentWidth}px); }
    }
  `;

  // Animación de fondo sincronizada
  let startTime = null;
  function animateBackground(time) {
    if (!startTime) startTime = time;
    const elapsed = (time - startTime) / 1000; // segundos
    const percent = ((elapsed * speed) / contentWidth) * 100;
    footer.style.backgroundPosition = `${percent}% 50%`;
    requestAnimationFrame(animateBackground);
  }
  requestAnimationFrame(animateBackground);
}

startScroll();
window.addEventListener('resize', () => {
  // Reinicia la animación si cambian el tamaño de pantalla
  slider.style.animation = 'none';
  startScroll();
});