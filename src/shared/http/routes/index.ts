import usersRouter from "@UsersRoutes";
import sessionsRouter from "@SessionsRoutes";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Seja bem-vindo ao Banco Beedoo!");
});
router.use("/users", usersRouter);
router.use("/sessions", sessionsRouter);

export default router;
