const express = require("express");
const container = require("../../../../infrastructure/container");
const CallController = require("../../../controllers/call-controller");
const { TYPES } = require("../../../../shared/types");

const callController = container.get(CallController);
const router = express.Router();

router.get("/test", callController.createCall);

module.exports = router;