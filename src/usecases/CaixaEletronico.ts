export function caixaEletronico(valor_saque: number) {
  const notas_disponiveis = [100, 50, 20, 10];

  var cont: boolean = false;
  var string_concat: string;

  if (notas_disponiveis[notas_disponiveis.length - 1] > valor_saque)
    return "Não há notas disponíveis para o valor informado.";

  if (notas_disponiveis.includes(valor_saque)) {
    return valor_saque;
  }

  while (valor_saque >= notas_disponiveis[notas_disponiveis.length - 1]) {
    let note: number = 0;
    for (let i = 0; i < notas_disponiveis.length; i++) {
      if (valor_saque >= notas_disponiveis[i]) {
        note = notas_disponiveis[i];
        break;
      }
    }

    const div = Math.trunc(valor_saque / note);

    // console.log("Vais entregar %s notas de R$ %s", div, note);

    if (!cont) {
      string_concat = `Entregar ${div} nota(s) de R$${note},00`;
    } else {
      string_concat = `${string_concat} e ${div} nota(s) de R$ ${note},00`;
    }
    cont = true;
    valor_saque -= note * div;
  }

  if (valor_saque > 0) {
    return `${string_concat}, Ainda restaram R$${valor_saque},00 na sua conta`;
  }
  return string_concat + ".";
  // return "Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.";
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
