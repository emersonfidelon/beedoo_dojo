import { Validation } from "../protocols/validation"

export class AddBreakLineToTextValidationSpy implements Validation {
  frase: string[] = []
  colunas: number[] = []

  validate(frase: string, colunas: number): void {
    this.frase.push(frase)
    this.colunas.push(colunas)
  }
}