import { Server } from "./server";

export class Api {

  constructor(
    private readonly application = new Server()
  ) { }

  public main(): void {
    this.application.start();
  }
}

export default Api;
