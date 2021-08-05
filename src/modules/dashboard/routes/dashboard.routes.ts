import { Router } from "express";
import DashboardController from "../controllers/DashboardController";

const dashboardrouter = Router();
const dashboardController = new DashboardController();

dashboardrouter.get("/", dashboardController.index);
dashboardrouter.post("/saque", dashboardController.withdrawal);

export default dashboardrouter;
