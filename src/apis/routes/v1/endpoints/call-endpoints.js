const container = require("../../../../infrastructure/container/container");
const { CONTROLLERS } = require("../../../../shared/types");

const CallController = container.get(CONTROLLERS.CallController);

const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => CallController.createCall(req, res));

module.exports = router;
