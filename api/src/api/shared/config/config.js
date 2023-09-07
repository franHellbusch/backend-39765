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
  github: {
    clientId: process.env.GITHUB_CLIENT_ID || "da97a18bd8c7472b0f44",
    clientSecret:
      process.env.GITHUB_CLIENT_SECRET ||
      "e3a88af4535174f28d77f1442ce0bb250dd038e8",
    callbackUrl:
      process.env.GITHUB_CALLBACK_URL ||
      "http://localhost:8080/api/v1/auth/github/callback",
  },
  google: {
    clientId:
      process.env.GOOGLE_CLIENT_ID ||
      "866745802015-7rrnk792bbrmvfpeehp6k7m6jae5ihs5.apps.googleusercontent.com",
    clientSecret:
      process.env.GOOGLE_CLIENT_SECRET || "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",
    callbackUrl:
      process.env.GOOGLE_CALLBACK_URL ||
      "http://localhost:8080/api/v1/auth/google/callback",
  },
  jwt: {
    secret: process.env.SECRET || "jwtSecret",
  },
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
  sendgrid: {
    apiKey:
      process.env.SENDGRID_API_KEY ||
      "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",
    verifyUserEmail: "fhdeveloper18@gmail.com",
    templates: {
      restorePassword: process.env.SENDGRID_RESTORE_PASSWORD_TEMPLATE_ID,
    },
  },
};

export default config;
