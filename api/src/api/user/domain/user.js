export class User {
  constructor({
    id = null,
    email = "",
    displayName = "",
    name = null,
    lastName = null,
    age = null,
    picture = "",
    cart = "",
    role = "user",
  }) {
    this.id = id;
    this.email = email;
    this.displayName = displayName;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.picture = picture;
    this.cart = cart;
    this.role = role;
  }
}
