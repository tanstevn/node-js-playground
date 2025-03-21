class ValidationBehavior {
    constructor() {}

    async handle(request, next) {
        if (!request.validate) {
            return await next();
        }

        const errors = request.validate();

        if (errors.length > 0) {
            throw new Error(`Request validation for ${request.constructor.name} failed: ${errors.join(", ")}`)
        }

        await next();
    }
}

module.exports = new ValidationBehavior();