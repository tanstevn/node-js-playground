const express = require("express");
const callEndpoints = require("./endpoints/call-endpoints");

const router = express.Router();

router.use("/calls", callEndpoints);

module.exports = router;