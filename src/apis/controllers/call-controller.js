const CreateCallCommand = require("../../application/commands/calls/create-call-command");
const mediator = require("../../infrastructure/mediator");

class CallController {
  async createCall(req, res) {
    const command = new CreateCallCommand(req.body);
    const result = await mediator.send(command);

    res.status(201).json(result);
  }
}

module.exports = new CallController();
