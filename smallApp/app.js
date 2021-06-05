var express = require('express');
var app = express();

var mongoose = require('mongoose');
var setupController = require('./controllers/setupcontroller');
var apiController = require('./controllers/apicontroller');

var port = process.env.PORT || 3000;
app.use('/assets',express.static(__dirname+'/public'));
app.set('view engine','ejs');
const uri = "mongodb+srv://test:test@cluster0.wmisx.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },function(err){
        if(err) {
            console.log('Some problem with the connection ' +err);
        } else {
            console.log('The Mongoose connection is ready');
        }
    })

    setupController(app);
    apiController(app);
app.listen(port);