import { Request, Response } from "express";
import UsersRepository from "@UserRepository";
import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";

export default class DashboarController {
  public async index(req: Request, res: Response): Promise<Response> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userEmail = req.user.email;
    const user = await usersRepository.findByEmail(userEmail as string);

    if (!user) {
      throw new AppError("User was not found.", 401);
    }

    return res.json({
      user_email: userEmail,
      user_name: user.name,
      user_balance: user.balance
    });
  }

  public async withdrawal(req: Request, res: Response): Promise<Response> {
    const { withdrawalValue } = req.body;
    const usersRepository = getCustomRepository(UsersRepository);
    const userEmail = req.user.email;
    const user = await usersRepository.findByEmail(userEmail as string);

    if (!user) {
      throw new AppError("User was not found.", 401);
    }

    if (typeof withdrawalValue !== "number") {
      throw new AppError("Oops! I work only with cash. Please insert a valid withdrawalal value.", 401);
    }

    let totalBills = {
      OneHundred: 0,
      Fifty: 0,
      Twanty: 0,
      Ten: 0
    };

    let withdrawalStatus = true;
    let totalWithdrawalValue = withdrawalValue;
    let billsWithdrawn = "";
    let billDesc = "";

    while (totalWithdrawalValue > 0) {
      if (totalWithdrawalValue >= 100) {
        totalBills.OneHundred += 1;
        totalWithdrawalValue -= 100
      }
      
      else if (totalWithdrawalValue < 100 && totalWithdrawalValue >= 50) {
        totalBills.Fifty += 1;
        totalWithdrawalValue -= 50
      }
      
      else if (totalWithdrawalValue < 100 && totalWithdrawalValue >= 20) {
        totalBills.Twanty += 1;
        totalWithdrawalValue -= 20
      }
      
      else if (totalWithdrawalValue < 100 && totalWithdrawalValue >= 10) {
        totalBills.Ten += 1;
        totalWithdrawalValue -= 10
      } else {
        withdrawalStatus = false;
        throw new AppError("Withdrawal denied! This ATM works only with the following money bills: 100, 50, 20 and 10.", 401);
        break;
      }
    }
    
    for (let [key, value] of Object.entries(totalBills)) {
      if (value > 0) {
        if (key === "OneHundred") {
          billDesc = "R$ 100,00";
        } else if (key === "Fifty") {
          billDesc = "R$ 50,00";
        } else if (key === "Twanty") {
          billDesc = "R$ 20,00";
        } else {
          billDesc = "R$ 10,00";
        }
         
        billsWithdrawn += `You withdrew ${value} bill${value > 1 ? "s" : ""} of ${billDesc}\n`;
      }
    }

    user.balance -= withdrawalValue;

    await usersRepository.save(user);

    const withdrawalalValueBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(withdrawalValue);
    const userBalanceBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(user.balance);

    return res.json({
      message: `${user.name}, your withdrawal request was successful!
      You requested ${withdrawalalValueBRL} and your balance now is ${userBalanceBRL}.
      ${billsWithdrawn}`,
    });
  }
}
