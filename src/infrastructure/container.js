require("reflect-metadata");
const { Container } = require("inversify");
const { TYPES } = require("../shared/types");

const CallController = require("../apis/controllers/call-controller");
const Mediator = require("./mediator");

const container = new Container();

container.bind(CallController).toSelf();
container.bind(TYPES.Mediator).to(Mediator).inRequestScope();

module.exports = container;