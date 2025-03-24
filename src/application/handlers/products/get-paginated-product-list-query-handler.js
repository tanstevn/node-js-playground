const PaginatedResult = require("../../../shared/models/paginated-result");
const GetPaginatedProductListQuery = require("../../queries/products/get-paginated-product-list-query");

class GetPaginatedProductListQueryHandler {
  static RequestType = GetPaginatedProductListQuery;

  #productRepository;

  constructor(productRepository) {
    this.#productRepository = productRepository;
  }

  async handle(request) {
    console.log("GetPaginatedProductListQueryHandler!");

    return {
      success: true,
    };
  }
}

module.exports = GetPaginatedProductListQueryHandler;
