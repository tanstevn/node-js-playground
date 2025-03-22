require("reflect-metadata");
const { decorate, injectable } = require("inversify");
const AbstractMediator = require("../application/abstractions/abstract-mediator");

class Mediator extends AbstractMediator {
    constructor() {
        super();
    }
    
    async send(request) {
        const registeredHandlers = super.getHandlers();
        const requestHandler = registeredHandlers.get(request.constructor);
        const pipelineBehaviors = super.getBehaviors();

        const lastHandler = async () => {
            return requestHandler.handle(request);
        }

        let aggregateResult = lastHandler;        

        pipelineBehaviors.forEach((behavior) => {
            const nextValue = aggregateResult;
            
            aggregateResult = async () => {
                return await behavior.handle(request, nextValue);
            }
        });

        return await aggregateResult();
    }
}

module.exports = new Mediator();