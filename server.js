// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
// Import database URL
var db = require('./config/db');

// Set the port
var port = process.env.PORT || 8080;

// Connect to the mongoDB database specified in the config file
mongoose.connect(db.url);

// Get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// Import the Recipe model
var recipe = require("./app/models/Recipe.js");

// Post a test recipe using the imported model
var testRecipe = new recipe({ name: "Test2" });
testRecipe.save(function (err) {
	if (err) {
		console.log("Unsuccessful put");
		return handleError(err);
	} else {
		// saved!
		console.log("Successful put");
	}
})

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app