const trocarTema = () => {
  const trocarTema = document.getElementById("trocarIcon");
  const escuro = trocarTema.classList.contains("fa-sun");
  const sistemaEscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const temaAtual = localStorage.theme || (sistemaEscuro ? 'dark' : 'light'); // lê o valor da chave "theme" ou assume "dark" ou "light" de acordo com o sistema

  if (escuro || temaAtual === 'dark') {
    trocarTema.classList.remove("fa-sun");
    trocarTema.classList.add("fa-moon");
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    trocarTema.classList.remove("fa-moon");
    trocarTema.classList.add("fa-sun");
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
};

document.addEventListener('keydown', (tecla) => {
  if (tecla.metaKey || tecla.ctrlKey && tecla.code === 'KeyM') {
    trocarTema();
  }
});