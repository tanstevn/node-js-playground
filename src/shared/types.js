const SERVICES = {
  Mediator: Symbol.for("Mediator"),
};

const CONTROLLERS = {
  CallController: Symbol.for("CallController"),
};

const REPOSITORIES = {
  CallRepository: Symbol.for("CallRepository"),
  UserRepository: Symbol.for("UserRepository"),
};

const HANDLERS = {
  CreateCallCommandHandler: Symbol.for("CreateCallCommandHandler"),
};

const BEHAVIORS = {
  LoggingBehavior: Symbol.for("LoggingBehavior"),
  ValidationBehavior: Symbol.for("ValidationBehavior"),
};

module.exports = { SERVICES, CONTROLLERS, REPOSITORIES, HANDLERS, BEHAVIORS };
