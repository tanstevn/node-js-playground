const { REPOSITORIES, HANDLERS } = require("../../shared/types");
const CreateCallCommandHandler = require("../../application/handlers/calls/create-call-command-handler");
const GetPaginatedProductListQueryHandler = require("../../application/handlers/products/get-paginated-product-list-query-handler");

module.exports = (container) => {
  container
    .bind(HANDLERS.CreateCallCommandHandler)
    .toDynamicValue((context) => {
      const callRepository = context.get(REPOSITORIES.CallRepository);
      return new CreateCallCommandHandler(callRepository);
    })
    .inRequestScope();

  container
    .bind(HANDLERS.GetPaginatedProductListQueryHandler)
    .toDynamicValue((context) => {
      const productRepository = context.get(REPOSITORIES.ProductRepository);
      return new GetPaginatedProductListQueryHandler(productRepository);
    })
    .inRequestScope();
};
