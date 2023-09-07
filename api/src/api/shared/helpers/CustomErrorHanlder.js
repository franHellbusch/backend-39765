import httpStatus from "http-status";
import { ErrorNames } from "./errorNames.js";
import { HttpError } from "./HttpError.js";
import { VerifyCustomErrorName } from "./VerifyCustomErrorName.js";

class CustomErrorHandler {
  constructor() {
    this.errorHandlers = new Map();

    // Configure internal error handling
    this.errorHandlers.set(
      ErrorNames.INTERNAL_SERVER_ERROR,
      this.handleInternalServerError
    );

    // Configuring handling of other general errors
    this.errorHandlers.set(
      ErrorNames.UNAUTHORIZED,
      this.handleUnauthorizedError
    );
    this.errorHandlers.set(
      ErrorNames.MISSING_PATHS,
      this.handleMissingPathsError
    );
    this.errorHandlers.set(
      ErrorNames.WRONG_ID_FORMAT,
      this.handleWrongIdFormatError
    );
    this.errorHandlers.set(ErrorNames.FORBIDDEN, this.handleForbiddenError);
  }

  handleError(err) {
    if (err instanceof HttpError) return err;
    const error = VerifyCustomErrorName(err);
    const handler =
      this.errorHandlers.get(error.name) || this.handleInternalServerError;
    return handler.call(this, error);
  }

  handleUnauthorizedError(err) {
    const message =
      "Unauthorized Access: Access Denied. Please log in or contact the administrator.";
    return HttpError.createError(
      { message, name: err.name },
      httpStatus.UNAUTHORIZED
    );
  }

  handleMissingPathsError(err) {
    const errors = Object.keys(err.errors);
    const meta = { errors };
    const message = "Bad Request: Some required fields are missing";
    return HttpError.createError(
      { message, name: err.name },
      httpStatus.BAD_REQUEST,
      meta
    );
  }

  handleWrongIdFormatError(err) {
    const message = "Bad Request: Invalid ID format entered";
    return HttpError.createError(
      { message, name: err.name },
      httpStatus.BAD_REQUEST
    );
  }

  handleForbiddenError(err) {
    const message =
      "Forbidden: You do not have permission to perform this action";
    return HttpError.createError(
      { message, name: err.name },
      httpStatus.FORBIDDEN
    );
  }

  handleInternalServerError(err) {
    const message = err.message;
    return HttpError.createError(
      { message, name: err.name },
      httpStatus.INTERNAL_SERVER_ERROR
    );
  }
}

export default CustomErrorHandler;
