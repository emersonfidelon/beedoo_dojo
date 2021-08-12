export function VerificarNotas(notas_disponiveis: number[], valor_saque:number): any[] {
  const notas = [];

  notas_disponiveis.map((nota, index) => {
      notas.push({ valor: nota, quantidade: 0 });
      while (valor_saque >= nota) {
          valor_saque -= nota;
          notas[index].quantidade++;
      }
  })

  return notas;
}