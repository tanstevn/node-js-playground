class UnitResult {
  #errors;

  get successful() {
    return !this.#errors;
  }

  get errors() {
    return this.#errors;
  }

  static Success() {
    return this;
  }

  static Error(err) {
    const unitResult = new UnitResult();
    unitResult.#errors = [err];

    return unitResult;
  }
}

module.exports = UnitResult;
