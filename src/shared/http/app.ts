import express, { NextFunction, Request, Response } from "express";
import routes from "@MainRoutes";
import "express-async-errors";
import AppError from "@shared/errors/AppError";

class AppController{
    express: any;
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use((error: Error, req: Request, res: Response, next: NextFunction) => {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({
                status: "error",
                message: error.message,
                });
            }
            console.log(error);
            return res.status(500).json({
                status: "error",
                message: "Internal server error",
            });
        });
    }

    routes() {
        this.express.use(routes);
    }
}

export default new AppController().express;