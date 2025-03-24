class CartController {
  #mediator;

  constructor(mediator) {
    this.#mediator = mediator;
  }
}

module.exports = CartController;
