const glob = require("glob");
const { HANDLERS } = require("../../shared/types");

class MediatorHandlerRegistry {
  #handlers;

  constructor() {
    this.#handlers = new Map();
  }

  registerRequestHandlersByDirectoryPath(path) {
    glob.sync(path).forEach((file) => {
      const handlerClass = require(file);
      const handlerSymbol = HANDLERS[handlerClass.name];
      this.#handlers.set(handlerClass.RequestType, handlerSymbol);
    });
  }

  getHandlers() {
    return this.#handlers;
  }
}

module.exports = MediatorHandlerRegistry;
