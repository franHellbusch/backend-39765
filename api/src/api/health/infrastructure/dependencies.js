import { HealthMessageSender } from "../application/healthMessageSender.js";
import { HealthController } from "./controllers/healthController.js";
import { HealthRepository } from "./repositories/healthRepository.js";
import { HealthRouter } from "./routes/healthRouter.js";

// Health check dependency inyection
const healthRepository = new HealthRepository();
const healthMessageSender = new HealthMessageSender(healthRepository);
const healthController = new HealthController(healthMessageSender);
const healthRouter = new HealthRouter("api-health", healthController); // health check router

export default healthRouter;
