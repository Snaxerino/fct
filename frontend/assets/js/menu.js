const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu');

botaoMenu.addEventListener('click', function() {
  menu.classList.toggle('hidden');
});