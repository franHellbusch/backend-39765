import config from "../../../shared/config/config.js";
import { HealthMessage } from "../../domain/healthMessage.js";

export class HealthRepository {
  getHealthMessage() {
    return new HealthMessage({
      success: true,
      environment: config.globals.env,
      health: "up",
    });
  }
}
