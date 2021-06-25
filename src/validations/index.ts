import { IValidation } from '../models/IValidation';

class Validations {
  public isRequired(value: any, message: string) {
    if (!value || value.length === 0)
      throw new Error(message);
  }

  public hasMinLen = (value: string, min: number, message: string) => {
    if (value.length < min)
      throw new Error(message);
  }

  public isLowerThan = (value: string | number, min: number, message: string) => {
    if (Number.isInteger(value)) {
      if (value < min) {
        throw new Error(message)
      }
    } else if (value.toString().length < min)
      throw new Error(message);
  }

  public isInteger(value: any, message: string) {
    if (!Number.isInteger(value))
      throw new Error(message)
  }
}

export default Validations;