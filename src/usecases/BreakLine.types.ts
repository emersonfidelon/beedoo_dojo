export type IBreakLineProps = {
  phase: string
  columns: number
}

export type IBreakLineValidator = {
  (props: IBreakLineProps): void;
}

export type IMakeBreakLineValidatorProps = {
  isLowerThen: (value: number, minimum: number, message: string) => void,
  isEmpty: (value: string, message: string) => void,
  isNotInteger: (value: number, message: string) => void
}