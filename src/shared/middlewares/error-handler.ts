import { Request, Response, NextFunction } from "express";
import config from "../environment/configuration";
import { IError } from "./error.interface";
import { HttpStatusCode } from "../enum";

export class ErrorHandler {
  constructor(public error: IError) { }

  public static errorMiddleware(error: IError, req: Request, res: Response, next: NextFunction): void {
    const status = error.status || HttpStatusCode.INTERNAL_SERVER_ERROR;
    const payload = {
      message: error.message || "Something went really wrong!!! :(",
      stack: (config.server.environment !== "production") ? error.stack : undefined
    };

    res.status(status).send(payload);
  }

}

export default ErrorHandler;
