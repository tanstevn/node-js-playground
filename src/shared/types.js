const REPOSITORIES = {
  CallRepository: Symbol.for("CallRepository"),
  UserRepository: Symbol.for("UserRepository"),
};

const HANDLERS = {
  CreateCallCommandHandler: Symbol.for("CreateCallCommandHandler"),
};

module.exports = { REPOSITORIES, HANDLERS };
