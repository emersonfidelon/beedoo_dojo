export function caixaEletronico(valor_saque:number) {

    let notas_disponiveis = [];
    notas_disponiveis.push({valor:100, quantidade: 2});
    notas_disponiveis.push({valor:50, quantidade: 10});
    notas_disponiveis.push({valor:20, quantidade: 10});
    notas_disponiveis.push({valor:10, quantidade: 10});

    let valor_restante = valor_saque,
        notas = [], infos_to_return = 'Entregar ';

    if(valor_saque < 0) {
        return 'Não é possível sacar um valor negativo.';
    }

    if(valor_saque % 10 !==0){
        return 'Ná há notas disponíveis para o valor informado.';
    }

    if(notas_disponiveis.find(nota => nota.valor == valor_saque && nota.quantidade > 0)) {
        return `Entregar 1 nota de R$${valor_saque},00.`;
    }   

    notas_disponiveis.map(nota => {
        let quantidade = Math.min(valor_restante / nota.valor | 0, nota.quantidade) ;
        valor_restante -= quantidade * nota.valor;
        
        notas.push(JSON.stringify({ valor: nota, quantidade: quantidade }));   
        
        //Prepara o texto de resposta
        quantidade > 0 ?
        infos_to_return += 
        `${quantidade} ${quantidade === 1 ? 'nota' : 'notas'} de R$${nota.valor},00, ` : 0;        
    })
    
    return manipula_texto(infos_to_return)+'.'
}

//Remove as virgulas desnecessárias
function manipula_texto(text) {
    if(  text.indexOf( ", " ) > 0 && text.indexOf( ", " ) != text.lastIndexOf( ", " )  ) { 
        text = text.slice( 0, text.lastIndexOf( ", " ) ); 
        return text.slice( 0, text.lastIndexOf( ", " ) ) + " e"  + text.substring( text.lastIndexOf( ", " )+1 );
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