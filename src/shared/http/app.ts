import "reflect-metadata";
import "@shared/typeorm";
import "express-async-errors";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import routes from "@MainRoutes";
import AppError from "@shared/errors/AppError";

class AppController{
    express: any;
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
        this.errorHandler();
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(cors());
    }

    routes() {
        this.express.use(routes);
    }

    errorHandler() {
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
}

export default new AppController().express;