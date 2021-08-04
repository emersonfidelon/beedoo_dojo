import { IBreakLineProps, IBreakLineValidator } from "./BreakLine.types"
import { breakLineValidator } from "./BreakLinesValidator"

const makeBreakLine = (breakLineValidator: IBreakLineValidator) =>
  ({ phase, columns }: IBreakLineProps): string => {
    breakLineValidator({ columns, phase })
    let row = '', result = '';
    const words = phase.trim().split(' ');
    words.forEach(word => {
      if (row.length + word.length < columns) {
        row += (!row) ? word : ` ${word}`;
      } else {
        result += `${row}\n`;
        row = word;
      }
    })
    return result;
  }

export const BreakLine = makeBreakLine(breakLineValidator);