import express from "express";
import routes from "@MainRoutes";

class AppController{
    express: any;
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {

    }

    routes() {
        this.express.use(routes);
    }
}

export default new AppController().express;