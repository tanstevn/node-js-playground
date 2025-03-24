class ValidationError extends Error {
  constructor(name, error) {
    super("Validation failed.");
    this.name = name;
    this.status = 400;
    this.error = error;
  }
}

module.exports = ValidationError;
