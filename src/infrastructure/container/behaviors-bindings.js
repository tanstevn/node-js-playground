const { BEHAVIORS } = require("../../shared/types");
const LoggingBehavior = require("../../apis/middlewares/behaviors/logging-behavior");
const ValidationBehavior = require("../../apis/middlewares/behaviors/validation-behavior");

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
