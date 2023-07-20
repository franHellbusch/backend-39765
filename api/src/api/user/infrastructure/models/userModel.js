import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

export const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    displayName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: null,
    },
    lastName: {
      type: String,
      default: null,
    },
    age: {
      type: Number,
      default: null,
    },
    picture: {
      type: String,
      default: null,
    },
    cart: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

export const userModel = model("user", UserSchema);
