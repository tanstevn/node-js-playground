require("reflect-metadata");
const { Container } = require("inversify");
const { TYPES } = require("../shared/types");

const container = new Container();

// container.bind(TYPES.Mediator).toConstantValue(new Mediator());
// container.bind(TYPES.CallController).to(CallController).inRequestScope();
// container.bind(TYPES.UserController).to(UserController).inRequestScope();

module.exports = container;
