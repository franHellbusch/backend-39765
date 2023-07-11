import MongoStore from "connect-mongo";
import { getMongoUrl } from "./mongo.js";
import "dotenv/config.js";

const config = {
  globals: {
    port: process.env.PORT || 8080,
    env: process.env.NODE_ENV || "production",
  },
  server: {
    gretting: () => `Server up and running on port ${config.globals.port}`,
    apiVersion: "/api/v1",
  },
  session: {
    secret: process.env.SECRET_KEY || "mysecret",
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({ mongoUrl: getMongoUrl() }),
  },
  admin: {
    email: process.env.ADMIN_EMAIL || "adminCoder@coder.com",
    password: process.env.ADMIN_PASSWORD || "adminCod3r123",
  },
  jwt: {
    secret: process.env.SECRET || "jwtSecret",
  },
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
};

export default config;
