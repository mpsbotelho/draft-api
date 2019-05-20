import { Sequelize } from "sequelize-typescript";
import { Options } from "sequelize/types";
import { UserDb } from "./models";
import config from "../lib/environment/configuration";

// TODO(mpsbotelho) study this class to keep api more reliable and deal with scalability, should it be singleton? should create a factory with connection pool? ....
export class Database {

  private sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(config.db as Options);
    this.sequelize.addModels([
      UserDb // TODO(mobotelho) if the database grows too much, this wont be maintainable
    ]);
  }

  public async connect(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      console.log("Connected to database successfully!");
    } catch (err) {
      console.error(`Failed to connect to database, ${err}`);
      throw err;
    }
  }

  public async close(): Promise<void> {
    try {
      await this.sequelize.close();
      console.log("Connection closed successfully!");
    } catch (err) {
      console.error(`Failed to close database connection, ${err}`);
      throw err;
    }
  }
}
