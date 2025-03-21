const container = require("./container");

class Mediator {
    #pipelines;

    constructor() {
        this.#pipelines = [];
    }

    usePipelineBehavior(behavior) {
        this.#pipelines.push(behavior);
    }

    async send(request) {
        const handler = container.get(request.constructor);

        if (!handler) {
            throw new Error(`There is no handler for ${request.constructor.name} registered.`);
        }

        for (const pipeline in this.#pipelines) {
            await pipeline.handle(request);
        }

        return handler.handle(request);
    }
}

module.exports = new Mediator();