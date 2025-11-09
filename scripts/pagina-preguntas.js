const textbox = document.querySelector('.js-textbox');
const textbox2 = document.querySelector('.js-textbox-2');
const textbox3 = document.querySelector('.js-textbox-3');
const textbox4 = document.querySelector('.js-textbox-4');

document.querySelectorAll('.js-preguntar-button').forEach(button => {
  button.addEventListener('click', function() {
    textbox.value = ''; // Limpia el contenido del input o textarea
  });
});

document.querySelectorAll('.js-preguntar-button').forEach(button => {
  button.addEventListener('click', function() {
    textbox2.value = ''; // Limpia el contenido del input o textarea
  });
});

document.querySelectorAll('.js-preguntar-button').forEach(button => {
  button.addEventListener('click', function() {
    textbox3.value = ''; // Limpia el contenido del input o textarea
  });
});

document.querySelectorAll('.js-preguntar-button').forEach(button => {
  button.addEventListener('click', function() {
    textbox4.value = ''; // Limpia el contenido del input o textarea
  });
});


document.querySelectorAll('.js-textbox').forEach(textbox => {
  textbox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.value = ''; // limpia solo este textbox
    }
  });
});

document.querySelectorAll('.js-textbox-2').forEach(textbox => {
  textbox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.value = ''; // limpia solo este textbox
    }
  });
});

document.querySelectorAll('.js-textbox-3').forEach(textbox => {
  textbox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.value = ''; // limpia solo este textbox
    }
  });
});

document.querySelectorAll('.js-textbox-4').forEach(textbox => {
  textbox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.value = ''; // limpia solo este textbox
    }
  });
});