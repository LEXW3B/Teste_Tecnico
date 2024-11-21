import { Router } from "express";
import { confirmRide } from "../controllers/ride_controller";

const router = Router();

router.patch("/rides/:id/confirm", confirmRide);

export default router;
