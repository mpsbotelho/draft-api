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
          port: GetEnv.int("SERVICE_PORT"),
          apiKey: GetEnv.string("API_KEY")
        }
      };
    } catch (err) {
      console.error(err);
    }
  }
}

export default Configuration.Instance.get();
