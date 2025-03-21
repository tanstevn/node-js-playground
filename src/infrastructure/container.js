require("reflect-metadata");
const { Container } = require("inversify");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const container = new Container();

// const registerMediatorHandlers = (directory) => {
//     fs.readdirSync(directory).forEach((file) => {
//         const fullPath = path.join(directory, file);

//         if (fs.statSync(fullPath).isDirectory()) {
//             registerMediatorHandlers(fullPath);
//         } else if (file.endsWith(".js")) {
//             const HandlerClass = require(fullPath);

//             if (HandlerClass && HandlerClass.RequestType) {
//                 container.bind(HandlerClass.RequestType).to(HandlerClass);
//             }
//         }
//     });
// };

// const registerMediatorPipelineBehaviors = (directory) => {
//     fs.readdirSync(directory).forEach((file) => {
//         const fullPath = path.join(directory, file);

//         if (fs.statfsSync(fullPath).isDirectory()) {
//             registerMediatorPipelineBehaviors(fullPath);
//         } else if (file.endsWith(".js")) {
//             const BehaviorClass = require(fullPath);

//             if (BehaviorClass) {

//             }
//         }
//     });
// }

// registerMediatorHandlers(path.join(__dirname, "../application/handlers"));

const handlersPath = path.join(__dirname, "../application/handlers/**/*.js");
const behaviorsPath = path.join(__dirname, "../application/behaviors/*.js");

const handlers = glob.sync(handlersPath);
const behaviors = glob.sync(behaviorsPath);

handlers.forEach((file) => {
    const handler = require(file);
    container.bind(handler.RequestType).to(handler);
});

behaviors.forEach((file) => {
    const behavior = require(file);
    container.bind(behavior).toSelf();
});

module.exports = container;