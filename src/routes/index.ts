import { Router } from "express";
import UserController from "./user";
import HealthController from "./health";

const router = Router();

router.use("/health", HealthController);
router.use("/users", UserController);

export default router;