import * as Joi from "joi";

export class UserValidator {
  public static async postValidator(req, res, next): Promise<Error> {
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
}
