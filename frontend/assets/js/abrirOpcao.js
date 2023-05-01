const opcoes = document.querySelectorAll('.opcoes');
opcoes.forEach(opcoes => 
    opcoes.addEventListener('click', () => 
        opcoes.nextElementSibling.classList.toggle('hidden')));