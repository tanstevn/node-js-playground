const UnitResult = require("./unit-result");

class Result extends UnitResult {
  #data;

  constructor() {
    super();
  }

  get data() {
    return this.#data;
  }

  withData(data) {
    this.#data = data;
  }

  static Success(data) {
    const result = new Result();
    result.withData(data);

    return result;
  }
}

module.exports = Result;
