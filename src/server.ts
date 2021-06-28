import express from "express";
import CashOutController from "./controllers/CashOutController";

const app = express();
app.use(express.json());

const cashOutController = new CashOutController();

app.post("/", cashOutController.index);

app.listen(8080, () => console.log("Server is running!"));
