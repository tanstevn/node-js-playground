const container = require("../infrastructure/container");
const AbstractMediator = require("../application/abstractions/abstract-mediator");

class Mediator extends AbstractMediator {
  constructor() {
    super();
  }

  async send(request) {
    const registeredHandlers = super.getHandlers();
    const HandlerClass = registeredHandlers.get(request.constructor);

    if (!HandlerClass) {
      return new Error(
        `No handler registered for ${request.constructor.name}.`
      );
    }

    const handlerName = `${request.constructor.name}Handler`;
    const handlerSymbol = Symbol.for(handlerName);

    const requestHandler = container.get(handlerSymbol);
    const pipelineBehaviors = super.getBehaviors();

    const lastHandler = async () => {
      return requestHandler.handle(request);
    };

    let aggregateResult = lastHandler;

    pipelineBehaviors.forEach((behavior) => {
      const nextValue = aggregateResult;

      aggregateResult = async () => {
        return await behavior.handle(request, nextValue);
      };
    });

    return await aggregateResult();
  }
}

module.exports = new Mediator();
