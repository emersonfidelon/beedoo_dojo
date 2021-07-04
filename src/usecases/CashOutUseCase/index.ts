import CashOutUseCase from "./CashOutUseCase";
import CashOutController from "./CashOutController";

const cashOutUseCase = new CashOutUseCase()

const cashOutController = new CashOutController(cashOutUseCase)

export  {cashOutController, cashOutUseCase}