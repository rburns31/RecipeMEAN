// Imports
var recipeModel = require("./models/Recipe.js");
var AWS = require('aws-sdk');
var socket = require('socket.io');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls and authentication routes
	app.get('/getRecipes', function (req, res) {
        //console.log("Picked up GET request from MainCtrl.js");
        var response;
        recipeModel.find({ }, function (err, recipes) {
  			if (err) {
  				//console.log("Unsuccessful get");
  				return handleError(err);
  			}
  				//console.log("Successful get");
  				response = recipes;
  				//console.log(response);
        		res.json(response);
			})
    });

    app.post('/postRecipe', function (req, res) {

		// Post the recipe using the imported model
		var recipe = new recipeModel(req.body);
		recipe.save(function (err) {
			if (err) {
				//console.log("Unsuccessful put");
				return handleError(err);
			} else {
				// saved!
				//console.log("Successful put");
			}
		})

        //console.log(req.body);
        res.send("finished");
    });

    app.post('/uploadToS3', function (req, res) {
    	console.log("Attempting to upload picture to S3...");
    	console.log(req.body);

    	AWS.config.update({accessKeyId: 'AKIAJMCKMTTNKMY4R6HA', secretAccessKey: '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'});

		var appId = 'RecipeMaster';
        var bucketName = 'recipemasterbucket';
        AWS.config.region = 'us-east-1';


        io.on('connection', function(socket){
			socket.on('Upload', function(msg) {
    			console.log('message: ' + msg);
    		});
  		});


        var bucket = new AWS.S3({
            params: {
                Bucket: bucketName
            }
        });

		if (req.body.file) {
            var params = {
                Key: req.body.name,
                //ContentType: 'image/jpeg',
                Body: req.body.file
                //ACL: 'public-read'
                //Key: 'testkey',
                //Body: 'testbody'
            };

            bucket.putObject(params, function (err, data) {
                if (err) {
                    console.log("Failed to put in S3");
                    console.log(err);
                } else {
       	        	console.log("Put in S3");
                    //listObjs();
                }
            });
        } else {
            console.log("No file to upload");
        }
    });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};