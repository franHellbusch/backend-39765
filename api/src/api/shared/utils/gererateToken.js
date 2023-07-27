import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const generateToken = (user) => {
  return jwt.sign(user, config.jwt.secret, { expiresIn: "1d" });
};
