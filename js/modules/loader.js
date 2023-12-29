export default function initLoader() {
  window.addEventListener('load', () => {
    const bgLoader = document.querySelector('.bg-loader');
    const titulo = document.querySelector('.titulo');
    const paragrafoMain = document.querySelector('.paragrafo-main');

    // Remove o loader da pagina após ela ter sido carregada
    if (bgLoader) {
      bgLoader.remove();
    }

    // Adicionar efeito de transição no titulo
    if (titulo) {
      titulo.classList.add('ativo');
    }

    // Adicionar efeito de transição no paragrafo
    if (paragrafoMain) {
      paragrafoMain.classList.add('ativo');
    }

    // Mudar o ano do copy para o ano atual
    const anoAtual = document.querySelector('.anoAtual');
    if (anoAtual) {
      anoAtual.innerText = '';
      anoAtual.innerText = new Date().getFullYear();
    }
  });
}
