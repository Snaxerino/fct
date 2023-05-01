const opcoes = document.querySelectorAll('.opcoes');

opcoes.forEach(opcoes => {
    opcoes.addEventListener('click', () => {
        const icon = opcoes.querySelector('.icon_opcoes');
        icon.classList.toggle("-rotate-90");
        opcoes.nextElementSibling.classList.toggle('hidden');
    });
});
