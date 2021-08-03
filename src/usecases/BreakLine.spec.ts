import { BreakLine } from "./BreakLine"
import {
  wordIsToShort,
  columnsShouldBeNumber,
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
  test('Verifica se a entrada esta correta', () => {
    const phase = 'teste um dois tres'
    const columns = 20
    const breakLine = new BreakLine(phase, columns)
    expect(breakLine).toBeInstanceOf(BreakLine)
  })

  test('Retorna erro com uma phase vazia', () => {
    const phase = ''
    const columns = 20
    expect(() => { new BreakLine(phase, columns) }).toThrow(new Error(wordIsToShort))
  })

  test('Retorna erro quando columns for menor que 1', () => {
    const phase = 'teste um dois tres'
    const columns = 0
    expect(() => { new BreakLine(phase, columns) }).toThrow(new Error(columnsNumberLessThanZero))
  })

  test('Retorna erro quanto o numero de columns não for um inteiro', () => {
    const phase = 'teste um dois tres'
    const columns = 12.2
    expect(() => { new BreakLine(phase, columns) }).toThrow(new Error(columnsShouldBeNumber))
  })

  test.each([[`um cinco`, 10], [`phase um`, 8]]
  )(`Valida se a phase %p contem menos que %p columns`, (firstArg, expectedResult) => {
    expect(firstArg.length).toBeLessThanOrEqual(expectedResult)
  })
})