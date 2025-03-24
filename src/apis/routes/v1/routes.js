const express = require("express");
const callEndpoints = require("./endpoints/call-endpoints");
const productEndpoints = require("./endpoints/product-endpoints");
const orderEndpoints = require("./endpoints/order-endpoints");
const cartEndpoints = require("./endpoints/cart-endpoints");
const paymentEndpoints = require("./endpoints/payment-endpoints");

const router = express.Router();

router.use("/call", callEndpoints);
router.use("/product", productEndpoints);
router.use("/order", orderEndpoints);
router.use("/cart", cartEndpoints);
router.use("/payment", paymentEndpoints);

module.exports = router;
