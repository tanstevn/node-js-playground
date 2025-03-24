const express = require("express");
const callEndpoints = require("./endpoints/call-endpoints");
const productEndpoints = require("./endpoints/product-endpoints");
const orderEndpoints = require("./endpoints/order-endpoints");
const cartEndpoints = require("./endpoints/cart-endpoints");
const paymentEndpoints = require("./endpoints/payment-endpoints");

const router = express.Router();

router.use("/calls", callEndpoints);
router.use("/products", productEndpoints);
router.use("/orders", orderEndpoints);
router.use("/carts", cartEndpoints);
router.use("/payments", paymentEndpoints);

module.exports = router;
