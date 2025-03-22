class LoggingBehavior {
    async handle(request, next) {
        const start = process.hrtime();

        console.log(`Request for ${request.constructor.name} is now processing.`);
        
        const result = await next(request);

        const end = process.hrtime(start);
        const endMs = (end[0] * 1000 + end[1] / 1e6).toFixed(2);

        console.log(`Request for ${request.constructor.name} completed in ${endMs}ms.`);

        return result;
    }
}

module.exports = LoggingBehavior;
