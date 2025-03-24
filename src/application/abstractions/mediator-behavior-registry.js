const glob = require("glob");
const path = require("path");
const { BEHAVIORS } = require("../../shared/types");

class MediatorBehaviorRegistry {
  #behaviors;

  constructor() {
    this.#behaviors = [];
  }

  registerPipelineBehaviorsByDirectoryPath(behaviorsPath) {
    glob.sync(behaviorsPath).forEach((file) => {
      const behaviorClass = require(path.resolve(file));
      const behaviorSymbol = BEHAVIORS[behaviorClass.name];
      this.#behaviors.push(behaviorSymbol);
    });
  }

  get behaviors() {
    return this.#behaviors.reverse();
  }
}

module.exports = MediatorBehaviorRegistry;
