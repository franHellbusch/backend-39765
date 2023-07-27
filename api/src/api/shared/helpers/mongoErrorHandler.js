import httpStatus from "http-status";
import { HttpError } from "./HttpError.js";

export const mongoErrorHandler = (err) => {
  if (err.name == "CastError") {
    err.message = `Wrong ID format entered`;
    return HttpError.createError(err, httpStatus.BAD_REQUEST);
  }
  if (err.name == "ValidationError") {
    const errors = Object.keys({ ...err }.errors);
    const meta = { errors };
    err.message = `Missing (${errors}) paths`;

    return HttpError.createError(err, httpStatus.BAD_REQUEST, meta);
  }
  if (err.code == 11000) {
    const errors = Object.keys({ ...err }.keyValue);
    const meta = { errors };
    err.message = `Duplicate Keys Error: Items you are trying to create already exists (${errors})`;

    return HttpError.createError(err, httpStatus.CONFLICT, meta);
  }
  if (err.message == "Not found") {
    return HttpError.createError(err, httpStatus.NOT_FOUND);
  }

  return HttpError.createError(err, err.status || 500);
};
