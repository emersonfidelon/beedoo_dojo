class BreakLine {
    frase: string;
    colunas: number;
    countQuebraLinha: number = 0;

    constructor(frase: string, colunas: number) {
        this.frase = frase;
        this.colunas = colunas;

        this.validate();
    }

    handle() {
        let fraseFinal = '';
        let previousString = '';
        let currentString = '';
        this.frase.split(' ').forEach(element => {
            previousString += `${element} `;

            if (this.removeSpaceFinalString(previousString).length < this.colunas) {
                currentString = previousString;
            } else {
                previousString = `${element} `;

                fraseFinal += `${currentString}\n`;
            }
        });
        fraseFinal += `${currentString} \n`;
        console.log(fraseFinal);
        return fraseFinal;
    }

    private removeSpaceFinalString(stringInput: string): string {
        return stringInput.slice(0, stringInput.lastIndexOf(' '));
    }

    private validate() {
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
