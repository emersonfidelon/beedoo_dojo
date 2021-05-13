import {AddBreakLineToText, BreakLine} from '../usecases/BreakLine'
import {AddBreakLineToTextValidation} from '../usecases/AddBreakLineToTextValidation'

const makeAddBreakLineToText = (): BreakLine => {
  const validation = new AddBreakLineToTextValidation()
  return new AddBreakLineToText(validation)
}