import exportar from './pagina-de-votaciones.js';

exportar.renderVotes();
console.log(exportar.candidateVote);

  const messages = document.querySelectorAll('.ethical-footer .ethical-message');
  let current = 0;

  setInterval(() => {
    messages[current].classList.remove('active');
    current = (current + 1) % messages.length;
    messages[current].classList.add('active');
  }, 4000); // cambia cada 4 segundos

