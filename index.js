let express = require('express'),
    app = express(),
    PORT = 3000,
    SampleController = require('./controller/sampleController.js');

SampleController(app)
app.listen(PORT, console.log("App is running on localhost:3000"));