import "dotenv/config.js";

const config = {
  globals: {
    port: process.env.PORT || 8080,
    env: process.env.NODE_ENV || "production",
  },
  client: {
    clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  },
  server: {
    gretting: () => `Server up and running on port ${config.globals.port}`,
    apiVersion: "/api/v1",
    apiUrl: process.env.API_URL || "http://localhost:8080",
  },
  admin: {
    email: process.env.ADMIN_EMAIL || "adminCoder@coder.com",
    password: process.env.ADMIN_PASSWORD || "adminCod3r123",
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackUrl: process.env.GITHUB_CALLBACK_URL,
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackUrl: process.env.GOOGLE_CALLBACK_URL,
  },
  jwt: {
    secret: process.env.SECRET || "jwtSecret",
  },
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  },
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY,
    verifyUserEmail: process.env.SENDGRID_VERIFY_EMAIL,
    templates: {
      restorePassword: process.env.SENDGRID_RESTORE_PASSWORD_TEMPLATE_ID,
    },
  },
};

export default config;
