import { IConfig } from "./configuration.interface";
import * as DotEnv from "dotenv";
import * as GetEnv from "getenv";

export class Configuration {

  public static instance: Configuration;

  public static get Instance(): Configuration {
    return this.instance || (this.instance = new this());
  }

  public get(): IConfig {
    try {
      DotEnv.config();
      return {
        server: {
          name: GetEnv.string("SERVICE_NAME"),
          port: GetEnv.int("SERVICE_PORT", process.env.PORT || 3000),
          apiKey: GetEnv.string("API_KEY")
        },
        db: {
          database: GetEnv.string("DATABASE"),
          host: GetEnv.string("DATABASE_HOST"),
          port: GetEnv.int("DATABASE_PORT"),
          dialect: GetEnv.string("DATABASE_DIALECT"),
          username: GetEnv.string("DATABASE_USERNAME"),
          password: GetEnv.string("DATABASE_PASSWORD")
        }
      };
    } catch (err) {
      console.error(err);
    }
  }
}

export default Configuration.Instance.get();

// Used to execute db migrations
module.exports.db = Configuration.Instance.get().db;
