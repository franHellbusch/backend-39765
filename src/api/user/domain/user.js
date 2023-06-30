export class User {
  constructor({
    id = null,
    email = "",
    name = "",
    lastName = "",
    age = 18,
    cart = "",
    role = "user",
  }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.cart = cart;
    this.role = role;
  }
}
