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

        let columnsCounter = 0
        let lastBreakpoint = 0
        let result = frase.split('')
        for (let index = 0; index < frase.length; index++) {
            if (frase[index] === ' ') {
                lastBreakpoint = index
            }
            if (columnsCounter === colunas) {
                result[lastBreakpoint] = '\n'
                columnsCounter = 0
                index = lastBreakpoint
            }
            columnsCounter++
        }

        return result.join('')
    }
}
