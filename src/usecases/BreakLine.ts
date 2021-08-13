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
        let fraseAux = '';
        for(const palavra of this.frase.split(' ')){
            if(fraseAux.length + palavra.length < this.colunas){
                fraseAux = fraseAux.concat(` ${palavra}`);
                fraseFinal = fraseFinal.concat(` ${palavra}`);
            } 
            else {
                fraseAux = '\n'+palavra;
                fraseFinal = fraseFinal.concat(fraseAux);
                this.countQuebraLinha++;
            } 
        }
        return fraseFinal;
    }

    validate() {
        if (this.frase.length === 0) {
            throw new Error('A frase deve conter ao menos um carácter')
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
