export default function initLoader() {
  window.addEventListener('load', (event) => {
    document.querySelector('.bg-loader').remove();
    document.querySelector('.titulo').classList.add('ativo');
    document.querySelector('.paragrafo-main').classList.add('ativo');

    const anoAtual = document.querySelector('.anoAtual');
    if (anoAtual) {
      anoAtual.innerText = '';
      anoAtual.innerText = new Date().getFullYear();
    }
  });
}
