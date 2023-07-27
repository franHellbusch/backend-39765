export class HealthMessageSender {
  constructor(healthRepository) {
    this.healthRepository = healthRepository;
  }

  sendMessage = () => {
    return this.healthRepository.getHealthMessage();
  };
}
