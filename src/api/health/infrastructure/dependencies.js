import { Router } from "express";
import { HealthRepository } from "./repositories/healthRepository.js";
import { HealthController } from "./controllers/healthController.js";
import { HealthMessageSender } from "../application/healthMessageSender.js";

const router = Router();

// Health check dependency inyection
const healthRepository = new HealthRepository();
const healthMessageSender = new HealthMessageSender(healthRepository);
const healthController = new HealthController(healthMessageSender);
router.get("/health", healthController.healthCheck);

export default router;
