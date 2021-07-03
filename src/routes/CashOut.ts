import express from "express";

import { cashOutController } from "../usecases/CashOutUseCase";
const router = express.Router()

router.post('/',cashOutController.handle)

export default router