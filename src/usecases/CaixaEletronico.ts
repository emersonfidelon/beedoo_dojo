type NotaType = {
  cedula: string
  quantidade: number
}

export class CaixaEletronico {

  constructor(private cedulas_disponiveis: Array<number>) { }

  sacarToString(valor_saque: number) {
    const { notas } = this.sacar(valor_saque)

    const result = 'Entregar ' + notas.map(nota => (
      `${nota.quantidade} ${nota.quantidade > 1 ? "notas" : "nota"} de ${nota.cedula}`
    )).join(', ')

    return result + '.'
  }

  private sacar(valor_saque: number) {
    if (valor_saque % 10 !== 0)
      throw new Error('Ná há notas disponíveis para o valor informado.')

    const cedulas: Array<number> = []
    let notas: Array<NotaType> = []
    let i = 0

    while (valor_saque > 0) {
      if (valor_saque - this.cedulas_disponiveis[i] >= 0) {

        cedulas.push(this.cedulas_disponiveis[i])

        notas = this.addCedulaInNotas(notas, this.cedulas_disponiveis[i].toString())

        valor_saque -= this.cedulas_disponiveis[i]
      }
      else
        i++
    }

    return {
      notas,
      cedulas
    }
  }

  private addCedulaInNotas(notas: Array<NotaType>, cedula: string) {
    const idx = notas.findIndex(nota => nota.cedula === cedula)
    if (idx >= 0) {
      notas[idx].quantidade += 1
    }
    else {
      const newCedula = {
        cedula,
        quantidade: 1
      }
      notas.push(newCedula)
    }

    return notas
  }

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