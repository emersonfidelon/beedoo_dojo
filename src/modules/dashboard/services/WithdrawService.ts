import { getCustomRepository } from "typeorm";
import User from "@UserEntity";
import UsersRepository from "@UserRepository";
import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError("An user with that email address already exists.");
    }

    const newAgencyNumber = Math.floor(1000 + Math.random() * 9000);
    const newAcountNumber = Math.floor(1000 + Math.random() * 9000);
    const newAcountDigit = Math.floor(1 + Math.random() * 9);
    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      agency: newAgencyNumber,
      account_number: newAcountNumber,
      account_digit: newAcountDigit
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
