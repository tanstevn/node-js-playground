class BaseController {
  #mediator;

  constructor(mediator) {
    this.#mediator = mediator;
  }

  get mediator() {
    return this.#mediator;
  }
}

module.exports = BaseController;
