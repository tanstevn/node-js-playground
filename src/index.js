require("dotenv").config();
require("reflect-metadata");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mapV1Routes = require("./apis/routes/v1/routes");
const exceptionHandlerMiddleware = require("./apis/middlewares/exception-handler-middleware");

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

app.use("/api/v1", mapV1Routes);

app.use(exceptionHandlerMiddleware);

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Server is now running on port ${port}...🚀`));
