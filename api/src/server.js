import app from "./api/app.init.js";
import { MongoConnect } from "./api/shared/config/mongo.js";
import { logger } from "./api/shared/utils/logger.js";

MongoConnect()
  .then(() => {
    app.listen();
  })
  .catch((err) => {
    logger.info(err);
  });
