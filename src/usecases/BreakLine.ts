import { IBreakLine } from "../interfaces/IBreakLine";
import { IBreakLineProps } from "../models/IBreakLineProps";

class BreakLine implements IBreakLine {
    private frase: String;
    private colunas: Number;
    private countQuebraLinha: number;

    constructor({ colunas, frase }: IBreakLineProps) {
        this.frase = frase;
        this.colunas = colunas;
        this.countQuebraLinha = 0;

        this.validate();
    }

    public handle(): string {
        let resultado = '';
        const palavras = this.frase.trim().split(' ');

        let linha = '';
        for (const palavra of palavras) {
            if (linha.length + palavra.length < this.colunas) {
                if (!linha)
                    linha += palavra;
                else
                    linha += ' ' + palavra;
            } else {
                resultado += `${linha}\n`;
                linha = palavra;
            }
        }

        if (linha) {
            resultado += linha;
        }

        return resultado.trim();
    }

    private validate(): void {
        if (this.frase.length === 0)
            throw new Error('A frase deve conter ao menos um caractere')

        if (this.colunas < 1)
            throw new Error('A quantidade de coluna deve ser maior do que zero')

        if (!Number.isInteger(this.colunas))
            throw new Error('A quantidade de coluna deve ser um inteiro')
    }
}

export { BreakLine }
