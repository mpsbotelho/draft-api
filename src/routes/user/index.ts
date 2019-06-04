import { Router, Request, Response, NextFunction } from "express";
import { UserValidator } from "./user.validator";
import { HttpStatusCode } from "../../shared/enum";
import * as jwt from "jsonwebtoken";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.sendStatus(HttpStatusCode.NOT_IMPLEMENTED);
});

router.post("/", UserValidator.postValidator, (req: Request, res: Response) => {
  res.status(HttpStatusCode.ACCEPTED).send("TA BALA");
});

router.delete("/", (req: Request, res: Response) => {
  res.sendStatus(HttpStatusCode.NOT_IMPLEMENTED);
});

router.put("/", (req: Request, res: Response) => {
  res.sendStatus(HttpStatusCode.NOT_IMPLEMENTED);
});

router.patch("/", (req: Request, res: Response) => {
  res.sendStatus(HttpStatusCode.NOT_IMPLEMENTED);
});

router.post("/login", UserValidator.loginValidator, (req: Request, res: Response, next: NextFunction) => {


  // User.findDb()
  const user = {
    dbEmail: "mpsbotelho@gmail.com",
    dbPassword: "123456"
  };

  if (!user || req.body.email !== user.dbEmail || req.body.password !== user.dbPassword) {
    res.status(401).send("User not found");
    next();
  }

  const token = jwt.sign({
    email: user.dbEmail
  }, "mysuperprivatekey", { expiresIn: "1 minute"});

  res.status(200).send({access_token: token});
});

export default router;
