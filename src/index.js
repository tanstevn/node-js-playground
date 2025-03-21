require("dotenv").config();
require("./infrastructure/container");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const exceptionHandlerMiddleware = require("./apis/middlewares/exception");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    res.json({ 
        message: "Hello, NodeJS Playground!"
    });
});

app.use(exceptionHandlerMiddleware);

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Server is now running on port ${port}...🚀`));
