const CallController = require("../../../controllers/call-controller");
const express = require("express");
const router = express.Router();

router.get("/test", CallController.createCall);

module.exports = router;