export interface IConfigServer {
  name: string;
  port: number;
  apiKey: string;
}

export interface IConfig {
  server: IConfigServer
}