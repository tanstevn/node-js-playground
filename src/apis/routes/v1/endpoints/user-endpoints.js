const UserController = require("../../../controllers/user-controller");
const express = require("express");
const router = express.Router();

router.get("/list", UserController.getAll);

module.exports = router;