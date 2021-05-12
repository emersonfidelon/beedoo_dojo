class BreakLine {
  frase: string;
  colunas: number;
  countQuebraLinha: number = 0;

  constructor(frase:string, colunas:number){
    this.frase = frase;
    this.colunas = colunas;

      this.validate();
  }

handle(){
      let fraseFinal = '';
      for(const frase of this.frase.split('')){
        if(fraseFinal.length < this.colunas){
              fraseFinal.concat(` ${frase}`)
 
           } else {
                fraseFinal.concat('\n')
                this.countQuebraLinha++;
            }   
        }

        return fraseFinal;
    }

    validate() {
        if (this.frase.length === 0) {
            throw new Error('A frase deve conter ao menos um caractere')
        }

        if (this.colunas < 1) {
            throw new Error('A quantidade de coluna deve ser maior do que zero')
        }

        if (!Number.isInteger(this.colunas)) {
            throw new Error('A quantidade de coluna deve ser um inteiro')
        }
    }
}

export { BreakLine }
