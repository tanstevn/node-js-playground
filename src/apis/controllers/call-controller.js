const CreateCallCommand = require("../../application/commands/calls/create-call-command");

class CallController {
  #mediator;

  constructor(mediator) {
    this.#mediator = mediator;
  }

  async createCall(req, res) {
    const command = new CreateCallCommand(req.body);
    const result = await this.#mediator.send(command);

    res.status(201).json(result);
  }
}

module.exports = CallController;
