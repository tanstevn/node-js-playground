require("reflect-metadata");
const { Container } = require("inversify");

const registerControllers = require("./controller-bindings");
const registerRepositories = require("./repositories-bindings");
const registerRequestHandlers = require("./handlers-bindings");
const registerPipelineBehaviors = require("./behaviors-bindings");
const registerMediator = require("./mediator-bindings");

const container = new Container();

registerControllers(container);
registerRepositories(container);
registerRequestHandlers(container);
registerPipelineBehaviors(container);
registerMediator(container);

module.exports = container;
