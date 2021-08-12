export function escreverFrase(notas: any[] ): string {

    let frase = "Entregar";

    notas.map((nota, index) => {
      if(nota.quantidade > 0) {
        if(index > 0) {
          frase += " e";
        }
        frase += ` ${nota.quantidade} nota${nota.quantidade > 1 ? 's' : ''} de R$${nota.valor},00`
      }
    })

    frase += '.';

    return frase;    
}