import INotas from "../Interfaces/Interfaces.CaixaelEtronico";
import { agruparNotas, escreverTextoRetorno, getNotasDisponiveis} from "../Controllers/Main";

export function caixaEletronico(valor_saque:number) {

    const notas_disponiveis : INotas[] = getNotasDisponiveis() ;

    if(notas_disponiveis.find(item => item.nota === valor_saque)) {
        return valor_saque;
    }
    
    if(valor_saque % 10 !==0){
        return 'Ná há notas disponíveis para o valor informado.';
    }

    const notas : Number[] = [] ;
    notas_disponiveis.map(item => {
       while (valor_saque >= item.nota && item.quantidade > 0) {
            notas.push(item.nota);
            valor_saque -= item.nota;
            item.quantidade -=1;
       }
    });

    if (valor_saque === 0) { 
        const notasAgrupadas = agruparNotas(notas, notas_disponiveis);
        return escreverTextoRetorno(notasAgrupadas); //'Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.';
    } 
    else {
        return 'Não há notas disponíveis para o valor solicitado!';
    }
}

//console.log(caixaEletronico(290));



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