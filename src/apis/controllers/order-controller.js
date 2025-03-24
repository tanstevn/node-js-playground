class OrderController {
  #mediator;

  constructor(mediator) {
    this.#mediator = mediator;
  }
}

module.exports = OrderController;
