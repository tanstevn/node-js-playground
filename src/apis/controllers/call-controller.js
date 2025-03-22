const container = require("../../infrastructure/container");
const mediator = require("../../infrastructure/mediator");
const CreateCallCommand = require("../../application/commands/calls/create-call-command");
const { TYPES } = require("../../shared/types");

class CallController {
    #mediator;

    constructor() {
        // this.#mediator = container.get(TYPES.Mediator);
    }

    async createCall(req, res) {
        const command = new CreateCallCommand(req.body.test);
        const result = await mediator.send(command);

        res.status(201).json(result);
    }
}

module.exports = CallController;