class CreateCallCommand {
    constructor(test) {
        this.test = test;
    }

    validate() {
        const errors = [];
        console.log("CreateCallCommand validated!");

        return errors;
    }
}

module.exports = CreateCallCommand;