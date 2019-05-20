export interface IConfigServer {
  name: string;
  port: number;
  apiKey: string;
}

export interface IConfigDatabase {
  database: string;
  host: string;
  port: number;
  dialect: string;
  username: string;
  password: string;
}

export interface IConfig {
  server: IConfigServer;
  db: IConfigDatabase;
}
