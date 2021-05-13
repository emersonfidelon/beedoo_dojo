import { Validation } from "../protocols/validation";

export interface BreakLine {
    apply(frase:string, colunas:number): string
}

export class AddBreakLineToText implements BreakLine {
    constructor (
        private readonly validation: Validation
    ) {}
    
    apply(frase: string, colunas: number): string {
        this.validation.validate(frase, colunas)
        if (frase.length <= colunas) {
            return frase
        }
        //                            li
        // 'Deve retornar a frase com\nquebra se a mesma conter o\nnúmero de caracteres maior\nque as colunas'

        let lastIndex = 0
        let result = frase.substring(0, index)
        for (let index = 0; index < frase.length; index++) {
            if (frase[index] === ' ') {
                lastIndex = index
            }
            if (index === colunasCount) {
                result[lastIndex] = '\n'
            }
        }

        return result.join('')
    }
}
