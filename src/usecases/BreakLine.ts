class BreakLine {
    frase: string;
    colunas: number;
    countQuebraLinha: number = 0;

    constructor(frase: string, colunas: number) {
        this.frase = frase;
        this.colunas = colunas;

        this.validate();
    }

    handle(): string {
        let arrString = Array.from(this.frase)
        for (let i = this.colunas; i >= 0; i--) {
            if (arrString[i] === ' ') {
                arrString[i] = '\n'
                if (i + this.colunas + 1 < arrString.length) {
                    i += this.colunas + 2
                } else {
                    break;
                }
            }
        }
        return arrString.join('')
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

        this.lançaErroSePalavraMaiorQueTamanhoColuna()
    }

    private lançaErroSePalavraMaiorQueTamanhoColuna(){
        let palavras = this.frase.split(' ')
        let maiorPalavra = 0
        for(let i = 0; i < palavras.length; i++){
            if(palavras[i].length > maiorPalavra){
                maiorPalavra = palavras[i].length
            }
        }

        if(maiorPalavra > this.colunas){
            throw new Error('A quantidade de colunas deve ser maior ou igual a quantidade de letras de cada palavra')
        }
    }
}

export { BreakLine }
