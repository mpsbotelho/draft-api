import * as Express from "express";
import Routes from "./routes";
import config from "./lib/environment/configuration";
import { Database } from "./db/database";
import { RouterMiddleware } from "./lib/core/router-middleware";

export class Server {

    private application;
    private express;
    private database;

    constructor() {
        this.express = Express();
        this.database = new Database();
    }

    public start(): void {
        try {
            this.database.connect();
            this.loadConfiguration();
            this.application = this.express.listen(config.server.port, () => {
                console.log(`Starting ${config.server.name}`);
                console.log(`Listening at localhost:${config.server.port}`);
            });
        } catch (err) {
            console.error(err);
        }
    }

    public stop(): void {
        this.application.close();
    }

    private loadConfiguration(): void {
        this.express.use("/", RouterMiddleware.apiKeyValidator, Routes);
    }
}
