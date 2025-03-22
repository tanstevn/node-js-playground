class ValidationBehavior {
    async handle(request, next) {
        if (!request.validate) {
            return await next(request);
        }

        const errors = request.validate();

        if (errors && errors.length > 0) {
            throw new Error(`Request validation for ${request.constructor.name} failed: ${errors.join(", ")}`)
        }

        await next(request);
    }
}

module.exports = ValidationBehavior;
