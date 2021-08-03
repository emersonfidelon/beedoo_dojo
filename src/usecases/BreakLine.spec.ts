import { BreakLine } from "./BreakLine"
import {
  wordIsToShort,
  columnsShouldBeInteger,
  columnsNumberLessThanZero,
} from "./BreakLinesMessages"

/**
 * ## Como BreakLine funciona? ##
 * Escreva um programa em que dado uma phase e a quantidade de columns que podem ser exibidas 
 * na tela, faça a quebra de linhas sem quebrar as palavras.
 * Por exemplo, se passarmos a phase "Um pequeno jabuti xereta viu dez cegonhas felizes." 
 * e pedirmos para ela ser exibida em 20 columns, teremos como resposta:
 * Um pequeno jabuti
 * xereta viu dez
 * cegonhas felizes.
 */

describe(BreakLine.name, () => {
  test('Verifica se é realmente uma função', () => {
    expect(BreakLine).toBeInstanceOf(Function)
  })

  test('Retorna erro com uma phase vazia', () => {
    const phase = ''
    const columns = 20
    expect(() => { BreakLine({ phase, columns }) }).toThrow(Error(wordIsToShort))
  })

  test('Retorna erro quando columns for menor que 1', () => {
    const phase = 'teste um dois tres'
    const columns = 0
    expect(() => { BreakLine({ phase, columns }) }).toThrow(Error(columnsNumberLessThanZero))
  })

  test('Retorna erro quanto o numero de columns não for um inteiro', () => {
    const phase = 'teste um dois tres'
    const columns = 12.2
    expect(() => { BreakLine({ phase, columns }) }).toThrow(Error(columnsShouldBeInteger))
  })

  test.each([[`um cinco`, 10], [`phase um`, 8]]
  )(`Valida se a phase %p contem menos que %p columns`, (firstArg, expectedResult) => {
    expect(firstArg.length).toBeLessThanOrEqual(expectedResult)
  })
})