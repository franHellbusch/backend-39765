export class HealthMessage {
  constructor({ success = true, environment = "production", health = "up" }) {
    this.success = success;
    this.environment = environment;
    this.health = health;
  }
}
