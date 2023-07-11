export class HealthMessage {
  constructor({ environment = "production", health = "up" }) {
    this.environment = environment;
    this.health = health;
  }
}
