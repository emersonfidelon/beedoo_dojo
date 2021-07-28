const notas_disponiveis = [100, 50, 20,10]; 
class CaixaEletronico {
    sacar(valor_saque:number){
        return new Promise<number | string>((resolve, reject) => {
            if(notas_disponiveis.includes(valor_saque)) {
                resolve(valor_saque)
            }
            
            if(valor_saque % 10 !== 0){
                resolve('Ná há notas disponíveis para o valor informado.')
            }
            let notas = []
            notas_disponiveis.map(nota => {
                while (valor_saque >= nota) {
                    let nota_ja_existe = notas.findIndex(nota_para_sacar => {
                        return nota_para_sacar.valor === nota;
                    })
                    if(nota_ja_existe >= 0){
                        notas[nota_ja_existe] = {
                            valor: nota,
                            qtd: notas[nota_ja_existe].qtd + 1
                        }
                    }else{
                        notas.push({valor: nota, qtd: 1});
                    }
                    valor_saque = valor_saque - nota
                }
            })           
            let notas_para_disponibilizar = notas.map(nota => {
                if(nota.qtd > 1){
                    return `${nota.qtd} notas de R$${nota.valor},00`
                }
                return `1 nota de R$${nota.valor},00`
            });
            let msg_notas_para_entregar = `Entregar ${notas_para_disponibilizar.join(' - ')}`
            resolve(msg_notas_para_entregar)
        })
    }
}

export { CaixaEletronico }

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