const GetPaginatedProductListQuery = require("../../application/queries/products/get-paginated-product-list-query");
const BaseController = require("./base-controller");

class ProductController extends BaseController {
  constructor(mediator) {
    super(mediator);
  }

  async getPaginatedProductList(req, res) {
    console.log("ProductController.getPaginatedProductList!");

    const query = new GetPaginatedProductListQuery(req.query);
    const result = await super.mediator.send(query);

    res.status(200).json(result);
  }
}

module.exports = ProductController;
