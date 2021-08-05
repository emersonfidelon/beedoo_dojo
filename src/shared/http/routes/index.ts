import usersRouter from "@UsersRoutes";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Seja bem-vindo ao Banco Beedoo!");
});
router.use("/users", usersRouter);

export default router;
