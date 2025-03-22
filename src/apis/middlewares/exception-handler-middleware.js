const ValidationError = require("../../shared/validation-errors");

const ExceptionHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    console.warn("Validation error.", err);

    return res.status(400).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
  }

  console.error("Global error. Please see inner exception.", err);

  return res.status(err.status || 500).json({
    success: false,
    message: "Something went wrong.",
  });
};

module.exports = ExceptionHandlerMiddleware;
