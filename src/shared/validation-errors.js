class ValidationError extends Error {
  constructor(err) {
    super("Validation failed.");
    this.name = "ValidationError";
    this.status = 400;
    this.erros = err;
  }
}

module.exports = ValidationError;
