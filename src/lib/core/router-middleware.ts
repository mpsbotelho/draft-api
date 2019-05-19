import { Request, Response, NextFunction } from "express";
import config from "../environment/configuration";

export class RouterMiddleware {

  public static apiKeyValidator(req: Request, res: Response, next: NextFunction) {
    if (req.get("x-api-key") !== config.server.apiKey) {
      return res.status(401).send(); 
    }
    return next();
  }
}