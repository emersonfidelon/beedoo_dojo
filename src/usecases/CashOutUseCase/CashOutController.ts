import {Request, Response } from 'express'
import CashOutUseCase from './CashOutUseCase'
class CashOutController {

  constructor(private cashOutUseCase:CashOutUseCase){}

  handle(request:Request, response:Response){

    const {valueToWithdraw} = request.body

    const resultString = this.cashOutUseCase.execute(valueToWithdraw)

    return response.json({resultString})

  }
}

export default CashOutController