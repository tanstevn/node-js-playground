const ValidationError = require("../../shared/errors");

const ExceptionHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        console.warn("Validation Error:", err);

        return res.status(400).json({
            success: false,
            message: err.message,
            errors: err.errors,
        });
    }

    console.error("Internal Server Error:", err.stack);

    return res.status(err.status || 500).json({
        success: false,
        message: "Something went wrong.",
    });
};

module.exports = ExceptionHandlerMiddleware;