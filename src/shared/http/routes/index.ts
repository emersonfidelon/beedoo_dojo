import usersRouter from "@UsersRoutes";
import sessionsRouter from "@SessionsRoutes";
import dashboardRouter from "@DashboardRoutes";
import isAuthenticated from "@middlewares/isAuthenticated";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Seja bem-vindo ao Banco Beedoo!");
});
router.use("/users", usersRouter);
router.use("/sessions", sessionsRouter);
router.use("/dashboard", isAuthenticated, dashboardRouter);

export default router;
