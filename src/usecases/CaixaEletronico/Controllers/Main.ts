import CurrencyFormatter from "../../../formatters/Currency";
import INotas from "../Interfaces/Interfaces.CaixaelEtronico";

export function agruparNotas(listaAgrupar: number[], listaAgrupadora: number[]) {
    const retorno : INotas[] = [];
     listaAgrupadora.map( nota => {
        const quantidade = listaAgrupar.filter(item => item === nota).length;
        quantidade > 0 && retorno.push({nota: nota, quantidade: quantidade}) 
    })
    return retorno;
 };
 
 export function escreverTextoRetorno (listaNotas : INotas[]) {
     return 'Entregar' + listaNotas.map((item , idx) => 
     ` ${item.quantidade} nota${item.quantidade > 1 ? 's' : ''} de ${CurrencyFormatter.format(item.nota)}${idx === listaNotas.length-2 ? ' e' : idx === listaNotas.length-1 ? '.' : ',' }`)
         .join('');
 }

 