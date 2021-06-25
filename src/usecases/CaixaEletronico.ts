
type TypeObjetoNotas = {
    nota: number;
    quantidade: number;
}

export function caixaEletronico(valor_saque:number) {

    const notas_disponiveis:number[] = [100, 50, 20, 10];

    if(notas_disponiveis.includes(valor_saque)) {
        return `Entregar 1 nota de R$${valor_saque},00.`
    }
    
    if(valor_saque % 10 !== 0){
        return 'Ná há notas disponíveis para o valor informado.';
    }

    let notas:number[] = []

    notas_disponiveis.map(nota => {
        while (valor_saque >= nota) {
            valor_saque -= nota
            notas.push(nota)
        }
    })  

    const objetoNotas:TypeObjetoNotas[] = gerarObjetoNotas(notas)
    const frase:string = gerarFrase(objetoNotas)

    return frase

}


function gerarFrase(objetoNotas:TypeObjetoNotas[]){
    let frase = `Entregar`

    objetoNotas.forEach(nota => {
        const index:number = objetoNotas.indexOf(nota)
        const ultimaNota:boolean = (index === objetoNotas.length-1)
        const primeiraNota:boolean = (index === 0)
        const notaDoMeio:boolean = (!primeiraNota && !ultimaNota)

        frase = frase + `${notaDoMeio ? ',' : ''}${ultimaNota ? ' e': ''} ${nota.quantidade} nota${nota.quantidade > 1 ? 's' : ''} de R$${nota.nota},00${ultimaNota ? '.': ''}`
    });

    return frase
}


function gerarObjetoNotas(notas:number[]){
    let frase:string = 'Entregar '
    let quantNotas = []

    notas.forEach(nota => {
        let temNota:boolean = false 
        
        quantNotas.forEach(obj => {
            if(obj.nota === nota){
                obj.quantidade++
                temNota = true
            } 
        })

        if(!temNota)
            quantNotas.push({nota, quantidade: 1})
        
    });

    return quantNotas
    
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