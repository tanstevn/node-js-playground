const { REPOSITORIES } = require("../../shared/types");
const CallRepository = require("../data/call-repository");
const ProductRepository = require("../data/product-repository");

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
