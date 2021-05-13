import {Validation} from '../protocols/validation'

export class MaxLimitValidationDecorator implements Validation {
  constructor (
    private readonly limit: number,
  ) {}
  
  validate(frase: string, colunas: number): void {
    if (colunas > this.limit) {
      throw new Error('Method not implemented.');
    }
  }
}