const { SERVICES, CONTROLLERS } = require("../../shared/types");
const CallController = require("../../apis/controllers/call-controller");
const ProductController = require("../../apis/controllers/product-controller");

module.exports = (container) => {
  container
    .bind(CONTROLLERS.CallController)
    .toDynamicValue((context) => {
      const mediator = context.get(SERVICES.Mediator);
      return new CallController(mediator);
    })
    .inTransientScope();

  container
    .bind(CONTROLLERS.ProductController)
    .toDynamicValue((context) => {
      const mediator = context.get(SERVICES.Mediator);
      return new ProductController(mediator);
    })
    .inTransientScope();
};
