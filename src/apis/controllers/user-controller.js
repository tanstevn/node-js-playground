const container = require("../../infrastructure/container");
const { TYPES } = require("../../shared/types");

class UserController {
    async getAll(req, res) {
        res.status(200).json({
            success: true
        });
    }
}

module.exports = new UserController();
