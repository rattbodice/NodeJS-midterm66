let CalController = require("./src/Controllers/CalController");

module.exports = (app) => {
    app.post('/que1',CalController.due1);
    app.post('/que2',CalController.due2);
}