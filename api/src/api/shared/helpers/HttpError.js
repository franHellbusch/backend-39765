import httpStatus from "http-status";

export class HttpError extends Error {
  constructor({ message, name, status, stack, meta }) {
    super(message);

    this.name = name;
    this.status = status;
    this.stack = stack;

    if (meta) {
      this.meta = meta;
    }
  }

  static createError = (err, sts, metaData) => {
    if (err instanceof HttpError) return err;

    const status = sts || err.status || 500;
    const name = err.name || httpStatus[`${status}_NAME`];
    const message = err.message || httpStatus[status];
    const meta = metaData || null;

    return new HttpError({
      message,
      name,
      status,
      stack: err.stack,
      meta,
    });
  };
}
