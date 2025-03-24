class PaymentController {
  #mediator;

  constructor(mediator) {
    this.#mediator = mediator;
  }
}

module.exports = PaymentController;
