const CreateCallCommand = require("../../commands/calls/create-call-command");

class CreateCallHandler {
    static RequestType = CreateCallCommand;

    async handle(request) {
        console.log("JEYVEN ROMENEIL LAVARIAS TAN!");

        return {
            success: true
        };
    }
}

module.exports = CreateCallHandler;