class BreakLine {
  text: string;
  columns: number;
  countBreakLine: number = 0;
  finalText: string;

  constructor(text:string, columns:number){
    this.text = text;
    this.columns = columns;

      this.validate();
  }

handle(){
    this.finalText = '';
    let line = '';
    for (const word of this.text.split(' ')) {
      const newLine = `${line} ${word}`;
      if (newLine.length <= this.columns) {
        line += `${word} `;
      } else {
        line += '\n';
        this.finalText += line;
        line = `${word} `;
      }
    }
    this.finalText += line;
    return this.finalText;
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
        } else {
            this.handle();
        }
    }
}

export { BreakLine }
