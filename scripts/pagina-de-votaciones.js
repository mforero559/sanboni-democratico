
let candidateVote = JSON.parse(localStorage.getItem('candidateVote')) || 0;
let voteCounts = JSON.parse(localStorage.getItem('voteCounts')) || {
  1: 0,
  2: 0,
  3: 0,
  4: 0
};

function renderVotes() {
  const candidates = [1, 2, 3, 4];

  candidates.forEach(num => {
    const voteButton = document.querySelector(`.js-votar-por-candidato-${num}`);
    const popUp = document.querySelector(`.js-pop-up-vote-${num}`);
    let isContentVisible = false;

    voteButton.addEventListener("click", function() {
      if (!isContentVisible) {
        popUp.innerHTML = `
          <p class="content-pop-up">¿Seguro que quieres votar por el candidato ${num}?</p>
          <p class="content-pop-up">Recuerda revisar sus propuestas antes de confirmar.</p>
          <button class="si-votar-button js-si-votar-${num}">Sí, votar</button>
        `;
        popUp.classList.add('visible');
        isContentVisible = true;

        const confirmButton = document.querySelector(`.js-si-votar-${num}`);
        confirmButton.addEventListener("click", function() {
          candidateVote = num;
          
          // Aumentar el contador de ese candidato
          voteCounts[num] = (voteCounts[num] || 0) + 1;

          // Guardar en localStorage
          localStorage.setItem('candidateVote', JSON.stringify(candidateVote));
          localStorage.setItem('voteCounts', JSON.stringify(voteCounts));

          console.log(`✅ Votaste por el candidato ${candidateVote}`);
          console.log(`📊 Conteo actual:`, voteCounts);

          // Si quieres redirigir al final, descomenta:
          window.location.href = "voto-registrado.html";
        });

      } else {
        popUp.innerHTML = '';
        popUp.classList.remove('visible');
        isContentVisible = false;
      }
    });
  });
}

function saveCandidateVotes() {
  localStorage.setItem('candidateVote', JSON.stringify(candidateVote));
  localStorage.setItem('voteCounts', JSON.stringify(voteCounts));
}

const exportar = {
  renderVotes,
  candidateVote,
  voteCounts,
  saveCandidateVotes
};

export default exportar;