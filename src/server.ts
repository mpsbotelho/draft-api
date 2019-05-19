import * as Express from "express";
import Routes from "./routes";
import { RouterMiddleware } from "./core/router-middleware";

export class Server {

    private application;
    private express;

    constructor(
    ) {
        this.express = Express();
    }

    public start() {
        this.loadConfiguration();
        this.application = this.express.listen(3000, () => {
            console.log("Starting the application");
            console.log("Listening at X:3000");
        });
    }

    public stop(): void {
        this.application.close();
    }

    private loadConfiguration(): void {
        this.express.use("/", RouterMiddleware.apiKeyValidator, Routes);
    }
}