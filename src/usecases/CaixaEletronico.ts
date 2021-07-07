/**
 * Calcula o menor número de notas que correspondem ao valor do saque do usuário.
 * Runtime: O(n)
 * @param {number} valor_saque
 * @returns {string}
 */
export function caixaEletronico (valorSaque: number) {

    const notasDisponiveis = [100, 50, 20, 10];

    // Checa se o valor solicitado é múltiplo de 10
    if (valorSaque % 10 !== 0)
        return 'Ná há notas disponíveis para o valor informado.';

    // Checa se o valor solicitado é inteiro positivo
    if (valorSaque < 0)
        return 'Valor inválido.';

    if (notasDisponiveis.includes(valorSaque))
        return `Entregar 1 nota de R$ ${valorSaque.toFixed(2).replace('.', ',')}.`;

    let valorRestante: number = valorSaque;
    let resposta: string = 'Entregar';
    // Neste caso preferi usar um for ao invés do map para podermos sair do laço quando o objetivo for atingido
    for (let nota of notasDisponiveis) {
        let quantidadeDeNotas: number = Math.floor(valorRestante / nota);
        if (quantidadeDeNotas > 0) {
            valorRestante -= (nota * quantidadeDeNotas);
            resposta +=
                (resposta.length > 8 ? ' e ' : ' ') +
                `${quantidadeDeNotas} nota` +
                (quantidadeDeNotas > 1 ? 's' : '') +
                ` de R$ ${nota.toFixed(2).replace('.',',')}`;
        }
        if (valorRestante === 0)
            break;
    }

    resposta += '.';

    return resposta;
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