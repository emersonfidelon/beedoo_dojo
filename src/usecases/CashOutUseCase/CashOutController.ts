import {Request, Response } from 'express'
import CashOutUseCase from './CashOutUseCase'
class CashOutController {

  constructor(private cashOutUseCase:CashOutUseCase){}

  handle = (request:Request, response:Response)=>{

    const {valueToWithdraw} = request.body

    try{
      const resultString = this.cashOutUseCase.execute(valueToWithdraw)

      return response.status(200).send({resultString})


    }catch(error){

      return response.status(400).send({errorMessage:error.message})
    }


  }
}

export default CashOutController