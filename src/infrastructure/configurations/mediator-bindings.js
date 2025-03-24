const path = require("path");
const { SERVICES } = require("../../shared/types");
const Mediator = require("../../application/abstractions/mediator");
const MediatorHandlerRegistry = require("../../application/abstractions/mediator-handler-registry");
const MediatorBehaviorRegistry = require("../../application/abstractions/mediator-behavior-registry");

module.exports = (container) => {
  const handlersPath = path.join(
    __dirname,
    "../../application/handlers/**/*.js"
  );
  const behaviorsPath = path.join(
    __dirname,
    "../../application/behaviors/*.js"
  );

  const handlerRegistry = new MediatorHandlerRegistry();
  const behaviorRegistry = new MediatorBehaviorRegistry();

  handlerRegistry.registerRequestHandlersByDirectoryPath(handlersPath);
  behaviorRegistry.registerPipelineBehaviorsByDirectoryPath(behaviorsPath);

  container
    .bind(SERVICES.Mediator)
    .toDynamicValue(() => {
      return new Mediator(
        container,
        handlerRegistry.handlers,
        behaviorRegistry.behaviors
      );
    })
    .inSingletonScope();
};
