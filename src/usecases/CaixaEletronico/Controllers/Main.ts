import CurrencyFormatter from "../../../formatters/Currency";
import INotas from "../Interfaces/Interfaces.CaixaelEtronico";

export function agruparNotas(listaAgrupar: Number[], listaNotasDisponiveis: INotas[]) {
    const retorno : INotas[] = [];
    listaNotasDisponiveis.map( itemNotaDisponivel => {
        const quantidade = listaAgrupar.filter(itemAgrupar => itemAgrupar === itemNotaDisponivel.nota).length;
        quantidade > 0 && retorno.push({nota: itemNotaDisponivel.nota, quantidade: quantidade}) 
    })
    return retorno;
 };
 
export function escreverTextoRetorno (listaNotas : INotas[]) {
     return 'Entregar' + listaNotas.map((item , idx) => 
     ` ${item.quantidade} nota${item.quantidade > 1 ? 's' : ''} de ${CurrencyFormatter.format(item.nota)}${idx === listaNotas.length-2 ? ' e' : idx === listaNotas.length-1 ? '.' : ',' }`)
         .join('');
 }

export function getNotasDisponiveis () {
    const notas_disponiveis : INotas[] = [
        {nota: 100 , quantidade: 2}, 
        {nota: 50 , quantidade: 2}, 
        {nota: 20 , quantidade: 2}, 
        {nota: 10 , quantidade: 2}
    ];
    return notas_disponiveis;
} 
