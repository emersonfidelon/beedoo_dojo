declare namespace Express {
  export interface Request {
    user: {
      email: string | undefined;
    };
  }
}
