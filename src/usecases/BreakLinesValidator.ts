import { IBreakLineProps, IMakeBreakLineValidatorProps } from "./BreakLine.types"
import { columnsNumberLessThanZero, columnsShouldBeInteger, wordIsToShort } from "./BreakLinesMessages"

const isLowerThen = (value: number, minimum: number, message: string) => {
  if (value < minimum) throw new Error(message)
}

const isEmpty = (value: string, message: string) => {
  if (!value) throw new Error(message)
}

const isNotInteger = (value: number, message: string) => {
  if (!Number.isInteger(value)) throw new Error(message)
}

const makeBreakLineValidator =
  ({ isLowerThen, isEmpty, isNotInteger }: IMakeBreakLineValidatorProps) =>
    ({ phase, columns }: IBreakLineProps) => {
      isEmpty(phase, wordIsToShort)
      isLowerThen(columns, 1, columnsNumberLessThanZero)
      isNotInteger(columns, columnsShouldBeInteger)
    }

export const breakLineValidator = makeBreakLineValidator({
  isNotInteger,
  isLowerThen,
  isEmpty,
})
