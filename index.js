require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/test", (req, res) => {
    res.json({ 
        message: "Hello, NodeJS Playground!"
    });
});

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Server is now running on port ${port}...🚀`));
