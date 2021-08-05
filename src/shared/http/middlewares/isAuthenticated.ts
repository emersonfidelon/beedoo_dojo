import jwt from "@config/auth/jwt";
import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface ITokenPayLoad {
  iat: number;
  ext: number;
  sub: string;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    throw new AppError("Token is missing.", 401);
  }

  const [, token] = headerAuth.split(" ");

  try {
    const decodedToken = verify(token, jwt.secret);
    const { sub } = decodedToken as ITokenPayLoad;

    req.user = {
      email: sub,
    };

    return next();
  } catch {
    throw new AppError("Invalid token.", 401);
  }
}
