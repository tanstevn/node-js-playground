const express = require("express");
const callEndpoints = require("./endpoints/call-endpoints");
const userEndpoints = require("./endpoints/user-endpoints");

const router = express.Router();

router.use("/call", callEndpoints);
router.use("/user", userEndpoints);

module.exports = router;
