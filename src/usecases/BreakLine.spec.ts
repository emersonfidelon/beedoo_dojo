import { AddBreakLineToText } from "./BreakLine";
import {AddBreakLineToTextValidationSpy} from '../mocks/validation-mocks'

type SutTypes = {
  sut: AddBreakLineToText
  addBreakLineToTextValidationSpy: AddBreakLineToTextValidationSpy
}

const makeSut = (): SutTypes => {
  const addBreakLineToTextValidationSpy = new AddBreakLineToTextValidationSpy()
  const sut = new AddBreakLineToText(addBreakLineToTextValidationSpy)
  return {
    sut,
    addBreakLineToTextValidationSpy
  }
}

const mockSutParams = () => ({
  frase: '',
  colunas: 20
})

describe('AddBreakLineToText', () => {
  test('Deve chamar Validation com valores corretos', () => {
    const { frase, colunas } = mockSutParams()
    const {sut, addBreakLineToTextValidationSpy} = makeSut()
    sut.apply(frase, colunas)
    expect(addBreakLineToTextValidationSpy.frase).toEqual([frase])
    expect(addBreakLineToTextValidationSpy.colunas).toEqual([colunas])
  });

  test('Deve retornar Erro se Validation falhar', () => {
    const { frase, colunas } = mockSutParams()
    const {sut, addBreakLineToTextValidationSpy} = makeSut()
    jest.spyOn(addBreakLineToTextValidationSpy, 'validate').mockImplementationOnce(() => { throw new Error() })
    expect(() => { sut.apply(frase, colunas) }).toThrow() 
  });

  test('Deve chamar Validation apenas uma vez', () => {
    const { frase, colunas } = mockSutParams()
    const {sut, addBreakLineToTextValidationSpy} = makeSut()
    sut.apply(frase, colunas)
    expect(addBreakLineToTextValidationSpy.frase).toEqual([frase])
  });

  test('Deve chamar Validation apenas uma vez', () => {
    const { frase, colunas } = mockSutParams()
    const {sut, addBreakLineToTextValidationSpy} = makeSut()
    sut.apply(frase, colunas)
    expect(addBreakLineToTextValidationSpy.frase).toEqual([frase])
  });

  test('Deve retornar a frase sem quebra se a mesma conter o mesmo número de caracteres que as colunas', () => {
    const frase = '123456789'
    const colunas = 9
    const {sut} = makeSut()
    const result = sut.apply(frase, colunas)
    expect(result).toEqual(frase)
  });

  test('Deve retornar a frase sem quebra se a mesma conter o número de caracteres menor que as colunas', () => {
    const frase = '123456'
    const colunas = 9
    const {sut} = makeSut()
    const result = sut.apply(frase, colunas)
    expect(result).toEqual(frase)
  });

  test('Deve retornar a frase com quebra se a mesma conter o número de caracteres maior que as colunas', () => {
    const frase = 'Deve retornar a frase com quebra se a mesma conter o número de caracteres maior que as colunas'
    const colunas = 30
    const expectedResult = 'Deve retornar a frase com\nquebra se a mesma conter o\nnúmero de caracteres maior\nque as colunas'
    const {sut} = makeSut()
    const result = sut.apply(frase, colunas)
    expect(result).toEqual(expectedResult)
  });
})

// Escreva um programa em que dado uma frase e a quantidade de colunas que podem ser exibidas na tela, faça a quebra de linhas sem quebrar as palavras.

// Por exemplo, se passarmos a frase "Um pequeno jabuti xereta viu dez cegonhas felizes." e pedirmos para ela ser exibida em 20 colunas, teremos como resposta:

// Um pequeno jabuti

// xereta viu dez

// cegonhas felizes.