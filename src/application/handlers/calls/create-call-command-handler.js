const CreateCallCommand = require("../../commands/calls/create-call-command");

class CreateCallCommandHandler {
  static RequestType = CreateCallCommand;

  #callRepository;

  constructor(callRepository) {
    this.#callRepository = callRepository;
  }

  async handle(request) {
    console.log("JEYVEN ROMENEIL LAVARIAS TAN!");

    return {
      success: true,
    };
  }
}

module.exports = CreateCallCommandHandler;
