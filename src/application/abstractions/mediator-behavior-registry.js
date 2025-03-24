const glob = require("glob");
const { BEHAVIORS } = require("../../shared/types");

class MediatorBehaviorRegistry {
  #behaviors;

  constructor() {
    this.#behaviors = [];
  }

  registerPipelineBehaviorsByDirectoryPath(path) {
    glob.sync(path).forEach((file) => {
      const behaviorClass = require(file);
      const behaviorSymbol = BEHAVIORS[behaviorClass.name];
      this.#behaviors.push(behaviorSymbol);
    });
  }

  getBehaviors() {
    return this.#behaviors.reverse();
  }
}

module.exports = MediatorBehaviorRegistry;
