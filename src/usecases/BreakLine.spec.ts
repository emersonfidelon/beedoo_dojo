import { BreakLine } from "./BreakLine"
import {
  wordIsToShort,
  columnsShouldBeInteger,
  columnsNumberLessThanZero,
} from "./BreakLinesMessages"

/**
 * ## Como BreakLine funciona? ##
 * Escreva um programa em que dado uma frase e a quantidade de columns que podem ser exibidas 
 * na tela, faça a quebra de linhas sem quebrar as palavras.
 * Por exemplo, se passarmos a phase "Um pequeno jabuti xereta viu dez cegonhas felizes." 
 * e pedirmos para ela ser exibida em 20 columns, teremos como resposta:
 * Um pequeno jabuti
 * xereta viu dez
 * cegonhas felizes.
 */

describe(BreakLine.name, () => {
  it('Verifica se é realmente uma função', () => {
    expect(BreakLine).toBeInstanceOf(Function)
  })

  it('O total de linhas deve ser igual a 7', () => {
    const phase = 'Deseja uma água ou esta tudo bem?';
    const columns = 7;
    const rows = BreakLine({ columns, phase }).split(/\r\n|\r|\n/) //check all platforms
    expect(rows.length).toBe(6)
  })

  it('O total de linhas deve ser igual a 1', () => {
    const phase = 'OSenhorManuel';
    const columns = 20;
    const rows = BreakLine({ columns, phase }).split(/\r\n|\r|\n/) //check all platforms
    expect(rows.length).toBe(1)
  })

  it('Retorna erro com uma phase vazia', () => {
    const phase = ''
    const columns = 20
    expect(() => { BreakLine({ phase, columns }) }).toThrow(Error(wordIsToShort))
  })

  it('Retorna erro quando columns for menor que 1', () => {
    const phase = 'ite um dois tres'
    const columns = 0
    expect(() => { BreakLine({ phase, columns }) }).toThrow(Error(columnsNumberLessThanZero))
  })

  it('Retorna erro quanto o numero de columns não for um inteiro', () => {
    const phase = 'ite um dois tres'
    const columns = 12.2
    expect(() => { BreakLine({ phase, columns }) }).toThrow(Error(columnsShouldBeInteger))
  })

  it.each([[`um cinco`, 10], [`phase um`, 8]]
  )(`Valida se a phase %p contem menos que %p columns`, (firstArg, expectedResult) => {
    expect(firstArg.length).toBeLessThanOrEqual(expectedResult)
  })
})