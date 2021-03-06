var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product');

//initialize our express app
var app = express();


//setup for mongoose
var mongoose = require('mongoose');

var dev_db_url = 'mongodb://shikha18:mangal1997@ds255930.mlab.com:55930/productstutorial'
var mongoDB = process.env.MONGODB_URI  || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

var port = 1234;

app.listen(port, () => {
	console.log('Server is up and running on Port number:' + port);

});