import { HealthRepository } from "./repositories/healthRepository.js";
import { HealthRouter } from "./routes/healthRouter.js";
import { HealthMessageSender } from "../application/healthMessageSender.js";

// Health check dependency inyection
const healthRepository = new HealthRepository();
const healthMessageSender = new HealthMessageSender(healthRepository);
const healthRouter = new HealthRouter("api-health", healthMessageSender); // health check router

export default healthRouter;
