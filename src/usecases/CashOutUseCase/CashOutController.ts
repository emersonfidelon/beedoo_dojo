import {Request, Response } from 'express'
import CashOutUseCase from './CashOutUseCase'
class CashOutController {

  constructor(private cashOutUseCase:CashOutUseCase){}

  handle(request:Request, response:Response){

    const {valueToWithdraw} = request.body

    const resultString = this.cashOutUseCase.execute(valueToWithdraw)
    console.log('RESULT STRING ', resultString)

    return response.send({resultString})

  }
}

export default CashOutController