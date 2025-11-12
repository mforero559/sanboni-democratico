import exportar from './pagina-de-votaciones.js';

function renderPage() {
  // Recupera el valor guardado (asegúrate de leerlo del localStorage también)
  const candidateVote = JSON.parse(localStorage.getItem('candidateVote'));

  const content = `<p class="gracias-por-el-voto">Muchas gracias, tu voto ha sido registrado para el candidato ${candidateVote}</p>
  <button class="volver-button js-volver">Volver a la página principal</button>`;

  document.querySelector('.voto-registrado').innerHTML = content;

  document.querySelector('.js-volver').addEventListener('click', function() {
    window.location.href = "index.html";
  });
}

renderPage();

