class LoggingBehavior {
    constructor() {}

    async handle(req, res, next) {
        const start = process.hrtime();
        console.log(start);
        
        await next();

        const end = process.hrtime(start);
        console.log(end);
    }
}

module.exports = new LoggingBehavior();