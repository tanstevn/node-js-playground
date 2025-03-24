const { BEHAVIORS } = require("../../shared/types");
const LoggingBehavior = require("../../application/behaviors/logging-behavior");
const ValidationBehavior = require("../../application/behaviors/validation-behavior");

module.exports = (container) => {
  container
    .bind(BEHAVIORS.LoggingBehavior)
    .to(LoggingBehavior)
    .inSingletonScope();

  container
    .bind(BEHAVIORS.ValidationBehavior)
    .to(ValidationBehavior)
    .inRequestScope();
};
