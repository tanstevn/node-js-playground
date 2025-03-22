class CreateCallCommand {
  #requestBody;

  constructor(requestBody) {
    this.#requestBody = requestBody;
  }

  validate() {
    const errors = [];
    console.log("CreateCallCommand validated!");

    return errors;
  }
}

module.exports = CreateCallCommand;
