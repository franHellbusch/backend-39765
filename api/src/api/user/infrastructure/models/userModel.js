import { Schema, model } from "mongoose";
import { createHash } from "../../../shared/utils/index.js";

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
    provider: {
      type: String,
      enum: ["google", "github", "local"],
      default: "local",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await createHash(this.password);
  }
  next();
});

export const userModel = model("user", UserSchema);
