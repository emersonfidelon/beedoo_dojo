export function caixaEletronico(valor_saque: number) {

  const notas_disponiveis = [100, 50, 20, 10];

  if (notas_disponiveis.includes(valor_saque)) return valor_saque;
  
  if (valor_saque % 10 !== 0) return 'Ná há notas disponíveis para o valor informado.';
  
  let notas = [];
  
  notas_disponiveis.map(nota => {

    if (nota > valor_saque) return;
  
    const quantidadeDeNotas = Math.floor(valor_saque / nota);
    
    valor_saque = valor_saque % nota;

    notas.push({
      valor: nota,
      quantidade: quantidadeDeNotas
    });
    
  });

  const retornoDoCaixa = notasParaEntregar(notas);

  return retornoDoCaixa;
}

interface NotasParaSaque {
  valor: number;
  quantidade: number;
}

function notasParaEntregar(notas: NotasParaSaque[]) {
  
  const valores = notas.map((nota, index, arr) => {

    if (!arr[index + 1]) return `e ${nota.quantidade} nota de R$ ${nota.valor},00.`;
  
    return `${nota.quantidade} nota de R$${nota.valor},00 `;
  }).join('');

  return `Entregar ${valores}`;
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