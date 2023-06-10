export class User {
  constructor({
    id = null,
    email = "",
    name = "",
    lastName = "",
    role = "user",
  }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.role = role;
  }
}
