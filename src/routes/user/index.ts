import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.sendStatus(501);
});

router.post("/", (req: Request, res: Response) => {
  res.sendStatus(501);
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
