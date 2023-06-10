import app from "./api/app.init.js";
import { MongoConnect } from "./api/shared/config/mongo.js";

MongoConnect()
  .then(() => {
    app.listen();
  })
  .catch((err) => {
    console.error(err);
  });
