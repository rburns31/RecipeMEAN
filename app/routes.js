module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls and authentication routes
	app.get("/getAllRecipes", function (req, res) {
        console.log("Picked up GET request from MainCtrl.js");
        res.send("finished")
    });

    app.post("/postRecipe", function (req, res) {
        console.log("Picked up POST request from AddRecipeCtrl.js");
        res.send("finished")
    });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};