const path = require("path");
const glob = require("glob");

const handlersPath = path.join(__dirname, "../handlers/**/*.js");
const behaviorsPath = path.join(__dirname, "../behaviors/*.js");

class AbstractMediator {
    #handlers;
    #behaviors;

    constructor() {
        this.#handlers = new Map();
        this.#behaviors = [];

        glob.sync(handlersPath).forEach((file) => {
            const HandlerClass = require(file);
            this.#handlers.set(HandlerClass.RequestType, HandlerClass);
        });
        
        glob.sync(behaviorsPath).forEach((file) => {
            const BehaviorClass = require(file);
            const behaviorInstance = new BehaviorClass();

            this.#behaviors.push(behaviorInstance);
        });
    }

    getHandlerClass(constructor) {
        return this.#handlers.get(constructor);
    }

    getBehaviors() {
        return this.#behaviors.reverse();
    }
}

module.exports = AbstractMediator;
