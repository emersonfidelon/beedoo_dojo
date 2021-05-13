import {Validation} from '../protocols/validation'

export class ValidationComposite implements Validation {
  constructor (
    private readonly validation: Validation[]
  ) {}
  
  validate(frase: string, colunas: number): void {
    for (const validation of this.validation) {
      validation.validate(frase, colunas)
    }
  }
}