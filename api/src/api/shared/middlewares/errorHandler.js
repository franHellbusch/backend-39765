import { HttpError } from "../helpers/HttpError.js";
import { logger } from "../utils/index.js";

export const errorHandler = (err, _req, res, _next) => {
  console.log(err);
  const httpError = HttpError.createError(err);

  if (httpError.status >= 500) {
    logger.fatal(httpError);
  } else {
    logger.error(httpError);
  }

  res.status(httpError.status || 400).json({
    success: false,
    message: httpError.message,
    ...httpError,
  });
};
