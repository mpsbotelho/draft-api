import { Router, Request, Response } from "express";
import { UserValidator } from "./user.validator";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.sendStatus(501);
});

router.post("/", UserValidator.postValidator, (req: Request, res: Response) => {
  res.send("Ta BALA");
});

router.delete("/", (req: Request, res: Response) => {
  res.sendStatus(501);
});

router.put("/", (req: Request, res: Response) => {
  res.sendStatus(501);
});

router.patch("/", (req: Request, res: Response) => {
  res.sendStatus(501);
});

export default router;
