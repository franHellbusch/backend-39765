export const errorHandler = (err, _req, res, _next) => {
  console.error(err);

  res.status(err.status || 400).json({
    success: false,
    message: err.message,
    ...err,
  });
};
