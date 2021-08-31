class BreakLine {
  text: string;
  columns: number;
  countBreakLine: number = 0;

  constructor(text:string, columns:number){
    this.text = text;
    this.columns = columns;

      this.validate();
  }

handle(){
      let formattedText = '';
      for(const word of this.text.split('')){
        if(formattedText.length < this.columns){
            formattedText.concat(` ${word}`)
 
           } else {
            formattedText.concat('\n')
                this.countBreakLine++;
            }   
        }

        return formattedText;
    }

    validate() {
        if (this.text.length === 0) {
            throw new Error('A frase deve conter ao menos um caractere')
        }

        if (this.columns < 1) {
            throw new Error('A quantidade de coluna deve ser maior do que zero')
        }

        if (!Number.isInteger(this.columns)) {
            throw new Error('A quantidade de coluna deve ser um inteiro')
        }
    }
}

export { BreakLine }
