import { Router } from "express";

const router = Router();

router.use("/", (req, res) => {
    res.send("Seja bem-vindo ao Banco Beedoo!");
});

export default router;
