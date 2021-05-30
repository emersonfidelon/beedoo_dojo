export function caixaEletronico(notas, valor_saque) {
    
    if (valor_saque <= 0) { return 'Insira um número válido' }
     
    if(valor_saque % 10 !==0){
        return 'Não há notas disponíveis para o valor informado.';
    }
     for (var i = 0; i < notas.length; i++) {
            if (valor_saque >= notas[i]) {
                var nota = notas[i]
            }
    }    
       var qtdeNotas = Math.floor(valor_saque / nota)
        var resto= (valor_saque % nota);    


        if ((resto != 0) && (resto > 1)) {
            caixaEletronico(notas, resto);
        }   

    return `Entregar ${Math.floor(qtdeNotas)} ${(qtdeNotas) === 1 ? 'nota' : 'notas'} de R$ ${nota},00.`
}
const notas_disponiveis = [10, 20, 50, 100];







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