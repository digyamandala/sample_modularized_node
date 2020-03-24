let ResponseHelper = require('../helper/responseHelper.js');

module.exports = function (app) {
    app.get('/test', (req, res) => {
        ResponseHelper.OK({ name: "test", date: Date.now() }, res);
    })
}