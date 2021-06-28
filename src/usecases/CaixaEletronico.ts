export function caixaEletronico(valor_saque: number) {

  const notas_disponiveis: number[] = [100, 50, 20, 10]

  if (valor_saque <= 0) {
    return 'Valor inválido'
  }

  if (notas_disponiveis.includes(valor_saque)) {
    return `Entregar 1 nota de R$${valor_saque},00`
  }

  if (valor_saque % 10 !== 0) {
    return 'Ná há notas disponíveis para o valor informado.';
  }

  let notas: number[] = []
  notas_disponiveis.map(nota => {
    while (valor_saque >= nota) {
      valor_saque -= nota
      notas.push(nota)
    }
  })

  let msg = ''
  const saque = [...new Set(notas)]
    .map(nota => {
      return { 'nota': nota, 'qtd': notas.filter(n => n == nota).length }
    })
    .forEach((nota, i, self) => {
      const comma = i === 0 ? '' : self.length == i + 1 ? ' e ' : ', '
      const notaQtd = nota.qtd > 1 ? 'notas' : 'nota'

      msg += `${comma}${nota.qtd} ${notaQtd} de R$${nota.nota},00`
    })

  return `Entregar ${msg}`;
}




// Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa
// eletrônico. Os requisitos básicos são os seguintes:
// ● Entregar o menor número de notas;
// ● É possível sacar o valor solicitado com as notas disponíveis;
// ● Saldo do cliente infinito;
// ● Quantidade de notas infinito (pode-se colocar um valor finito de cédulas para aumentar a dificuldade do
// problema);

// Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00

// Exemplos:
// Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.
// Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$
// 10,00