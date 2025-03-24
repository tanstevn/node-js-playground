const PaginatedRequest = require("../../../shared/models/paginated-request");

class GetPaginatedProductListQuery extends PaginatedRequest {
  constructor(query) {
    super(
      query.page,
      query.pageSize,
      query.sortBy,
      query.sortDirection,
      query.searchValue
    );
  }
}

module.exports = GetPaginatedProductListQuery;
