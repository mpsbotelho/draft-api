import { Request, Response, NextFunction } from "express";
import config from "../environment/configuration";
import { HttpStatusCode } from "../enum/";

export class RouterMiddleware {

  public static apiKeyValidator(req: Request, res: Response, next: NextFunction): Response | void {
    if (req.get("x-api-key") !== config.server.apiKey) {
      return res.status(HttpStatusCode.UNAUTHORIZED).send();
    }
    return next();
  }
}
