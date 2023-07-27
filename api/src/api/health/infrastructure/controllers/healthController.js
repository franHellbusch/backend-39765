export class HealthController {
  constructor(healthMessageSender) {
    this.healthMessageSender = healthMessageSender;
  }

  getHealthMessage = async (_req, res, _next) => {
    const message = await this.healthMessageSender.sendMessage();
    res.sendSuccessWithPayload(200, message);
  };
}
