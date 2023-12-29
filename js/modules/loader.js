export default function initLoader() {
  window.addEventListener('load', (event) => {
    const bgLoader = document.querySelector('.bg-loader');
    const titulo = document.querySelector('.titulo');
    const paragrafoMain = document.querySelector('.paragrafo-main');

    if (bgLoader) {
      bgLoader.remove();
    }

    if (titulo) {
      titulo.classList.add('ativo');
    }

    if (paragrafoMain) {
      paragrafoMain.classList.add('ativo');
    }

    const anoAtual = document.querySelector('.anoAtual');
    if (anoAtual) {
      anoAtual.innerText = '';
      anoAtual.innerText = new Date().getFullYear();
    }
  });
}
