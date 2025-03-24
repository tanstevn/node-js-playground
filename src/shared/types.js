const SERVICES = {
  Mediator: Symbol.for("Mediator"),
};

const CONTROLLERS = {
  CallController: Symbol.for("CallController"),
  ProductController: Symbol.for("ProductController"),
  OrderController: Symbol.for("OrderController"),
  CartController: Symbol.for("CartController"),
  PaymentController: Symbol.for("PaymentController"),
};

const REPOSITORIES = {
  CallRepository: Symbol.for("CallRepository"),
  ProductRepository: Symbol.for("ProductRepository"),
};

const HANDLERS = {
  CreateCallCommandHandler: Symbol.for("CreateCallCommandHandler"),
  GetPaginatedProductListQueryHandler: Symbol.for(
    "GetPaginatedProductListQueryHandler"
  ),
};

const BEHAVIORS = {
  LoggingBehavior: Symbol.for("LoggingBehavior"),
  ValidationBehavior: Symbol.for("ValidationBehavior"),
};

module.exports = { SERVICES, CONTROLLERS, REPOSITORIES, HANDLERS, BEHAVIORS };
