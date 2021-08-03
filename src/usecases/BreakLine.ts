import {
  wordIsToShort,
  columnsShouldBeNumber,
  columnsNumberLessThanZero,
} from "./BreakLinesMessages"

export class BreakLine {
  phase: string
  columns: number
  countBreakRow = 0

  constructor(phase: string, columns: number) {
    this.phase = phase
    this.columns = columns
    this.check()
  }

  run() {
    return this.phase.split('').forEach(phase => {
      const phaseFinal = ''
      if (phaseFinal.length > this.columns) {
        phaseFinal.concat('\n')
        this.countBreakRow++
      }
      phaseFinal.concat(` ${phase}`)
    })
  }

  check() {
    if (!this.phase.length) throw new Error(wordIsToShort)
    if (this.columns < 1) throw new Error(columnsNumberLessThanZero)
    if (!Number.isInteger(this.columns)) throw new Error(columnsShouldBeNumber)
  }
}