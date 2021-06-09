import CurrencyFormatter from "../formatters/Currency";

interface IGrupoNotas {
    item : number;
    quantidade : number;
}

function agruparNotas(listaAgrupar: number[], listaAgrupadora: number[]) {
   const retorno : IGrupoNotas[] = [];
    listaAgrupadora.map( nota => {
       const quantidade = listaAgrupar.filter(item => item === nota).length;
       quantidade > 0 && retorno.push({item: nota, quantidade: quantidade}) 
   })
   return retorno;
};

function escreverTextoRetorno (listaNotas : IGrupoNotas[]) {
    return 'Entregar' + listaNotas.map((nota , idx) => 
    ` ${nota.quantidade} nota${nota.quantidade > 1 ? 's' : ''} de ${CurrencyFormatter.format(nota.item)}${idx === listaNotas.length-2 ? ' e' : idx === listaNotas.length-1 ? '.' : ',' }`)
        .join('');
}
  

export function caixaEletronico(valor_saque:number) {

    const notas_disponiveis = [100, 50, 20,10];

    if(notas_disponiveis.includes(valor_saque)) {
        return valor_saque;
    }
    
    if(valor_saque % 10 !==0){
        return 'Ná há notas disponíveis para o valor informado.';
    }

    const notas : number[] = [] ;
    notas_disponiveis.map(nota => {
       while (valor_saque >= nota) {
            notas.push(nota);
            valor_saque -= nota;
         }
    });

    const notasAgrupadas = agruparNotas(notas, notas_disponiveis);
    
    return escreverTextoRetorno(notasAgrupadas); //'Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.';
}

console.log(caixaEletronico(110));



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