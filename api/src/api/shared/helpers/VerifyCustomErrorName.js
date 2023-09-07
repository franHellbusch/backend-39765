import { ErrorNames } from "./errorNames.js";

export const VerifyCustomErrorName = (err) => {
  const error = { ...err };
  switch (true) {
    case err.message === "No auth token":
      error.name = ErrorNames.UNAUTHORIZED;
      return error;
    case err.code === 11000:
      error.name = ErrorNames.DUPLICATE_KEY;
      return error;
    case err.name === "ValidationError":
      error.name = ErrorNames.MISSING_PATHS;
      return error;
    case err.name === "CastError":
      error.name = ErrorNames.WRONG_ID_FORMAT;
      return error;
    default:
      return error;
  }
};
