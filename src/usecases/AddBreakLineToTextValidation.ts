import { Validation } from '../protocols/validation'

export class AddBreakLineToTextValidation implements Validation {
  validate(frase: string, colunas: number): void {
    if (frase.length === 0) {
      throw new Error('A frase deve conter ao menos um caractere')
    }

    if (colunas < 1) {
        throw new Error('A quantidade de coluna deve ser maior do que zero')
    }

    if (!Number.isInteger(colunas)) {
        throw new Error('A quantidade de coluna deve ser um inteiro')
    }
  }
}