import expressPinoLogger from "express-pino-logger";
import { pino } from "pino";

const transport = pino.transport({
  targets: [
    {
      target: "pino-pretty",
      options: {
        colorize: true,
        levelFirst: true,
        translateTime: "yyyy-dd-mm, h:MM:ss TT",
      },
    },
    {
      target: "pino/file",
      options: { destination: "./Logs/clientErrors.log" },
      level: "error",
    },
    {
      target: "pino/file",
      options: { destination: "./Logs/fatalServerErrors.log" },
      level: "fatal",
    },
  ],
});

export const logger = pino(transport);

export const loggerMiddleware = expressPinoLogger({
  logger,
  autoLogging: false,
});
