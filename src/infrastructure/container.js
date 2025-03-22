require("reflect-metadata");
const { Container } = require("inversify");
const { REPOSITORIES, HANDLERS } = require("../shared/types");

const CallRepository = require("./data/call-repository");
const CreateCallCommandHandler = require("../application/handlers/calls/create-call-command-handler");

const container = new Container();

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

module.exports = container;
