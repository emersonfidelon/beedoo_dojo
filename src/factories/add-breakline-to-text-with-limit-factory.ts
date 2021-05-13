import {AddBreakLineToText, BreakLine} from '../usecases/BreakLine'
import {AddBreakLineToTextValidation} from '../usecases/AddBreakLineToTextValidation'
import {MaxLimitValidationDecorator} from '../usecases/AddBreakLineToTextWithMaxLimitDecorator'
import {ValidationComposite} from '../usecases/AddBreakLineToTextCompositeValidation'

const makeAddBreakLineToTextWithLimit = (): BreakLine => {
  const validation = new AddBreakLineToTextValidation()
  const decorator = new MaxLimitValidationDecorator(40)
  const composite = new ValidationComposite([validation, decorator])
  return new AddBreakLineToText(composite)
}