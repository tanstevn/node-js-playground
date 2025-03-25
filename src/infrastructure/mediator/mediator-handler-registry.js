const glob = require("glob");
const path = require("path");
const { HANDLERS } = require("../../shared/types");

class MediatorHandlerRegistry {
  #handlers;

  constructor() {
    this.#handlers = new Map();
  }

  registerRequestHandlersByDirectoryPath(handlersPath) {
    glob.sync(handlersPath).forEach((file) => {
      const handlerClass = require(path.resolve(file));
      const handlerSymbol = HANDLERS[handlerClass.name];
      this.#handlers.set(handlerClass.RequestType, handlerSymbol);
    });
  }

  get handlers() {
    return this.#handlers;
  }
}

module.exports = MediatorHandlerRegistry;
