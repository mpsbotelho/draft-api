import * as Joi from "joi";
import { Request, Response, NextFunction } from "express";

export class UserValidator {
  public static async postValidator(req: Request, res: Response, next: NextFunction): Promise<void> {
    return Joi.validate(
      // Current request
      req.body,
      // Request schema
      Joi.object().keys({
        email: Joi.string().email().required(),
        firstName: Joi.string().invalid("").required(),
        lastName: Joi.string().invalid("").required()
      }).required())
      .then(() => next())
      .catch(err => {
        // TODO error handler
        console.error(JSON.stringify(err));
        next(err);
      });
  }

  public static async loginValidator(req: Request, res: Response, next: NextFunction): Promise<void> {
    return Joi.validate(
      // Current request
      req.body,
      // Request schema
      Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().invalid("").required(),
      }).required())
      .then(() => next())
      .catch(err => {
        // TODO error handler
        console.error(JSON.stringify(err));
        next(err);
      });
  }
}
