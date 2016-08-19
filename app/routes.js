// Import the Recipe model
var recipeModel = require("./models/Recipe.js");

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls and authentication routes
	app.get('/getRecipes', function (req, res) {
        console.log("Picked up GET request from MainCtrl.js");
        var response;
        recipeModel.find({ }, function (err, recipes) {
  			if (err) {
  				console.log("Unsuccessful get");
  				return handleError(err);
  			}
  				console.log("Successful get");
  				response = recipes;
  				console.log(response);
        		res.json(response);
			})
    });

    app.post('/postRecipe', function (req, res) {

		// Post the recipe using the imported model
		var recipe = new recipeModel(req.body);
		recipe.save(function (err) {
			if (err) {
				console.log("Unsuccessful put");
				return handleError(err);
			} else {
				// saved!
				console.log("Successful put");
			}
		})

        console.log(req.body);
        res.send("finished");
    });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};