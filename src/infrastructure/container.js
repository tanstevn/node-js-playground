require("reflect-metadata");
const path = require("path");
const { Container } = require("inversify");
const {
  SERVICES,
  CONTROLLERS,
  REPOSITORIES,
  HANDLERS,
  BEHAVIORS,
} = require("../shared/types");

const Mediator = require("./mediator");
const MediatorHandlerRegistry = require("../application/abstractions/mediator-handler-registry");
const MediatorBehaviorRegistry = require("../application/abstractions/mediator-behavior-registry");

const CallController = require("../apis/controllers/call-controller");
const CallRepository = require("./data/call-repository");
const CreateCallCommandHandler = require("../application/handlers/calls/create-call-command-handler");
const LoggingBehavior = require("../application/behaviors/logging-behavior");
const ValidationBehavior = require("../application/behaviors/validation-behavior");

const container = new Container();

// Controllers
container
  .bind(CONTROLLERS.CallController)
  .toDynamicValue((context) => {
    const mediator = context.get(SERVICES.Mediator);
    return new CallController(mediator);
  })
  .inRequestScope();

// Repositories
container.bind(REPOSITORIES.CallRepository).to(CallRepository).inRequestScope();

// Request handlers
container
  .bind(HANDLERS.CreateCallCommandHandler)
  .toDynamicValue((context) => {
    const callRepository = context.get(REPOSITORIES.CallRepository);
    return new CreateCallCommandHandler(callRepository);
  })
  .inTransientScope();

// Pipeline behaviors
container
  .bind(BEHAVIORS.LoggingBehavior)
  .to(LoggingBehavior)
  .inSingletonScope();

container
  .bind(BEHAVIORS.ValidationBehavior)
  .to(ValidationBehavior)
  .inRequestScope();

// Mediator
const handlersPath = path.join(__dirname, "../application/handlers/**/*.js");
const behaviorsPath = path.join(__dirname, "../application/behaviors/*.js");

const handlerRegistry = new MediatorHandlerRegistry();
const behaviorRegistry = new MediatorBehaviorRegistry();

handlerRegistry.registerRequestHandlersByDirectoryPath(handlersPath);
behaviorRegistry.registerPipelineBehaviorsByDirectoryPath(behaviorsPath);

container
  .bind(SERVICES.Mediator)
  .toDynamicValue(() => {
    return new Mediator(
      container,
      handlerRegistry.getHandlers(),
      behaviorRegistry.getBehaviors()
    );
  })
  .inSingletonScope();

module.exports = container;
