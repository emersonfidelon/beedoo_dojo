import { Request, Response } from "express";
import CashOutService from "../services/CashOutService";

export default class CashOutController {
  index(request: Request, response: Response) {
    const { withdrawalValue } = request.body;

    const cashOutService = new CashOutService();
    const notes = cashOutService.execute(withdrawalValue);

    return response.json(notes);
  }
}
