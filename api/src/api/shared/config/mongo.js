import mongoose from "mongoose";
import { logger } from "../utils/index.js";

export const getMongoUrl = () => {
  const { MONGO_DB_NAME, MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_QUERY } =
    process.env;

  if (!MONGO_USER) {
    return `mongodb://${process.env.MONGO_URI}/${MONGO_DB_NAME}`;
  } else {
    return `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB_NAME}?${MONGO_QUERY}`;
  }
};

export const MongoConnect = async () => {
  await mongoose.set("strictQuery", false);

  await mongoose.connect(getMongoUrl());
  logger.info("MongoDB connection established");
};
