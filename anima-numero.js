export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  if (numeros) {
    numeros.forEach((numero) => {
      numero.innerText = 0;
    });

    function animaNumeros() {
      numeros.forEach((numero) => {
        const total = +numero.dataset.numero;

        const incremento = Math.ceil(total / 100);
        let start = 0;

        const timer = setInterval(() => {
          start += incremento;
          numero.innerText = start;

          if (start > total) {
            numero.innerText = total;
            clearInterval(timer);
          }
        }, 30);
      });
    }

    function handleMutation(mutation) {
      const mudou = mutation[0].target.classList.contains('ativo');
      if (mudou) {
        observer.disconnect();
        animaNumeros();
      }
    }

    const observerTarget = document.querySelector('.contador');
    const observer = new MutationObserver(handleMutation);

    console.log(observerTarget);

    observer.observe(observerTarget, { attributes: true });
  }
}

initAnimaNumeros();
