import {
  wordIsToShort,
  columnsShouldBeNumber,
  columnsNumberLessThanZero,
} from "./BreakLinesMessages"

export class BreakLine {
  frase: string
  colunas: number
  countQuebraLinha = 0

  constructor(frase: string, colunas: number) {
    this.frase = frase
    this.colunas = colunas
    this.check()
  }

  run() {
    return this.frase.split('').forEach(frase => {
      const fraseFinal = ''
      if (fraseFinal.length > this.colunas) {
        fraseFinal.concat('\n')
        this.countQuebraLinha++
      }
      fraseFinal.concat(` ${frase}`)
    })
  }

  check() {
    if (!this.frase.length) throw new Error(wordIsToShort)
    if (this.colunas < 1) throw new Error(columnsNumberLessThanZero)
    if (!Number.isInteger(this.colunas)) throw new Error(columnsShouldBeNumber)
  }
}