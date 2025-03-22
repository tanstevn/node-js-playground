class AbstractBehavior {
    async handle(request, next) {
        return next(request);
    }
}

module.exports = AbstractBehavior;