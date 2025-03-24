const container = require("../../../../infrastructure/container/container");
const { CONTROLLERS } = require("../../../../shared/types");

const express = require("express");
const router = express.Router();

const ProductController = container.get(CONTROLLERS.ProductController);

router.get("/", (req, res) =>
  ProductController.getPaginatedProductList(req, res)
);

router.post("/", (req, res) => {});
router.get("/:id", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

module.exports = router;
