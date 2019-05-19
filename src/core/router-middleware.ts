import { Request, Response, NextFunction } from "express";

export class RouterMiddleware {

  public static apiKeyValidator(req: Request, res: Response, next: NextFunction) {
    console.log(req.get("x-api-key"));
    if (req.get("x-api-key") !== "TODO") {
      return res.status(401).send(); 
    }
    return next();
  }
}