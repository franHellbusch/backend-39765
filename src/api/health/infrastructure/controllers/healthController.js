export class HealthController {
  constructor(healthMessageSender) {
    this.healthMessageSender = healthMessageSender;
  }

  healthCheck = async (req, res, next) => {
    try {
      const message = await this.healthMessageSender.sendMessage();
      res.status(200).json(message);
    } catch (err) {
      next(err);
    }
  };
}
