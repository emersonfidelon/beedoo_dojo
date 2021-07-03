import {Router}from "express";

import { cashOutController } from "../usecases/CashOutUseCase";

const cashOutRouter = Router()

cashOutRouter.post('/',cashOutController.handle)

export default cashOutRouter