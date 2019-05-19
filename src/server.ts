import * as Express from "express";
import Routes from "./routes";
import { RouterMiddleware } from "./lib/core/router-middleware";
import config from "./lib/environment/configuration";

export class Server {

    private application;
    private express;

    constructor(
    ) {
        this.express = Express();
    }

    public start() {
        this.loadConfiguration();
        this.application = this.express.listen(config.server.port, () => {
            console.log(`Starting ${config.server.name}`);
            console.log(`Listening at localhost:${config.server.port}`);
        });
    }

    public stop(): void {
        this.application.close();
    }

    private loadConfiguration(): void {
        this.express.use("/", RouterMiddleware.apiKeyValidator, Routes);
    }
}