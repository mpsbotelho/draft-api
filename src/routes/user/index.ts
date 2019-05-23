import { Router, Request, Response } from "express";
import { UserValidator } from "./user.validator";
import { HttpStatusCode } from "../../shared/enum";

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

export default router;
