class Mediator {
  #container;
  #handlers;
  #behaviors;

  constructor(container, handlers, behaviors) {
    this.#container = container;
    this.#handlers = handlers;
    this.#behaviors = behaviors;
  }

  async send(request) {
    const handlerSymbol = this.#handlers.get(request.constructor);

    if (!handlerSymbol) {
      throw new Error(`No handler registered for ${request.constructor.name}.`);
    }

    const requestHandler = this.#container.get(handlerSymbol);

    const lastHandler = async () => {
      return requestHandler.handle(request);
    };

    let aggregateResult = lastHandler;

    this.#behaviors.forEach((behaviorSymbol) => {
      const behavior = this.#container.get(behaviorSymbol);
      const nextValue = aggregateResult;

      aggregateResult = async () => {
        return await behavior.handle(request, nextValue);
      };
    });

    return await aggregateResult();
  }
}

module.exports = Mediator;
