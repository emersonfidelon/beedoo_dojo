import "reflect-metadata";
import "@shared/typeorm";
import app from "./app";

const listenPort = process.env.PORT || 3000;

app.listen(listenPort, () => {
    console.log(`[beedoo-dojo] Server is running on port ${listenPort}!`)
});