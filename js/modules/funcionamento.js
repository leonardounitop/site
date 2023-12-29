export default function initFuncionamento() {
  // Verifica a data da semana. Se tiver entre segunda e sexta e das 8 às 18
  // ira mudar para verde.
  const funcionamento = document.querySelector('[data-semana]');
  if (funcionamento) {
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
    const dataAgora = new Date();
    const dataLocal = dataAgora.toLocaleString('pt-BR', {
      timeZone: 'America/Cuiaba',
    });
    const arrayHorario = dataLocal.split(' ');
    const horarioLocal = arrayHorario[1].slice(0, 2);
    const diaAgora = dataAgora.getDay();
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto =
      horarioLocal >= horarioSemana[0] && horarioLocal < horarioSemana[1];
    if (semanaAberto && horarioAberto) {
      funcionamento.classList.add('aberto');
    }
  }
}
