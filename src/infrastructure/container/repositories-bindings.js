const { REPOSITORIES } = require("../../shared/types");
const CallRepository = require("../repositories/call-repository");
const ProductRepository = require("../repositories/product-repository");

module.exports = (container) => {
  container
    .bind(REPOSITORIES.CallRepository)
    .to(CallRepository)
    .inRequestScope();

  container
    .bind(REPOSITORIES.ProductRepository)
    .to(ProductRepository)
    .inRequestScope();
};
