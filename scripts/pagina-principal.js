document.querySelector('.js-how-to-button-candidatos')
  .addEventListener('click', function() {
    window.location.href = "propuestas-candidatos.html";
  });

document.querySelector('.js-how-to-button-propuestas')
  .addEventListener('click', function() {
    window.location.href = "propuestas-candidatos.html";
  });

document.querySelector('.js-how-to-button-preguntas')
  .addEventListener('click', function() {
    window.location.href = "pagina-preguntas.html";
  });


const messages = document.querySelectorAll('.ethical-message');
let current = 0;

setInterval(() => {
  messages[current].classList.remove('active');
  current = (current + 1) % messages.length;
  messages[current].classList.add('active');
}, 4000); // cambia cada 4 segundos
