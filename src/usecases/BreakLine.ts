import { IBreakLineProps, IBreakLineValidator } from "./BreakLine.types"
import { breakLineValidator } from "./BreakLinesValidator"

const makeBreakLine = (breakLineValidator: IBreakLineValidator) =>
  ({ phase, columns }: IBreakLineProps) => {
    breakLineValidator({ columns, phase })
    return phase.split('').forEach(phase => {
      const phaseFinal = ''
      if (phaseFinal.length > columns) phaseFinal.concat('\n')
      phaseFinal.concat(` ${phase}`)
    })
  }

export const BreakLine = makeBreakLine(breakLineValidator);