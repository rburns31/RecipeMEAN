angular.module('AddRecipeCtrl', []).controller('AddRecipeController', function($scope, $http, $location, filepickerService) {

    // Add the recipe
    $scope.postRecipe = function(recipe) {
    	alert("test");
    	if (recipe.name == null || recipe.name == "") {
    		$scope.addRecipeError = "Please enter a name for this recipe";
    		return;
    	}

        //var recipePicFile = document.getElementById('recipePic');
        //var fileName = recipePicFile.files[0].name;
        //alert(fileName);

		//var file = require('fs').createReadStream(fileName);

		alert("still running");

		//$(".loader").show();
        //var fr = new FileReader;
        //var file = document.getElementById("recipePic");
        //var tags = $("#myTags").tagit("assignedTags");
        //var timestamp = Date();
        //fr.onload = function() {
            //socket.emit('Upload', {imgLen: fr.result.length, img: fr.result});
            socket.emit('Upload', {msg: "Emit me"});
        //};
        //fr.readAsDataURL(file.files[0]);


		//var form = new FormData(); 
		//form.append("recipePic", file);
		//alert(form);

        //var fr = new FileReader();
      	//fr.onload = receivedText;
      	//fr.readAsText(file);
      	//fr.readAsDataURL(file);

		$http.post('/uploadToS3', {
			//name: recipe.name,
			//type: fileType,
			//file: fileName
		})
        .success(function(data, status) {

        }).error(function(data) {
            $scope.addRecipeError = "Failed while adding the picture to S3";
		});


        //alert(recipe.name);
        $http.post('/postRecipe', {
        	name: recipe.name,
  			ingredients: recipe.ingredients,
  			recipePic: recipe.recipePic,
  			foodPic: recipe.foodPic,
  			meal: recipe.meal,
  			tags: recipe.tags,
  			prepTime: recipe.prepTime,
    		cookTime: recipe.cookTime,
  			instructions: recipe.instructions,
  			rating: recipe.rating,
        	dateAdded: "",
        	addedBy: ""
        })
        .success(function(data, status) {
        	//alert("Recipe added successfully");
        	$scope.addRecipeError = "Added this recipe";
        }).error(function(data) {
            $scope.addRecipeError = "Failed to add this recipe";
            //alert("Recipe NOT added successfully");
        });
        $location.url('/');
    };









    $scope.recipePic = {};
    
    // Send the newly created superhero to the server to store in the db
    $scope.uploadRecipePic = function() {
        
        $http.post('/superhero', $scope.superhero)
            .success(function(data){
                console.log(JSON.stringify(data));
                // Clean the form to allow the user to create new superheroes
                //$scope.recipe = {};
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    
    // Single file upload, you can take a look at the options
    $scope.upload = function() {
        filepickerService.pick({
                mimetype: 'image/*',
                language: 'en',
                services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
            function(Blob) {
                console.log(JSON.stringify(Blob.url));
                alert(JSON.stringify(Blob.url));
                $scope.recipePic = Blob.url;
                $scope.$apply();
            }
        );
    };
    
    //Multiple files upload set to 3 as max number
    /**$scope.uploadMultiple = function() {
        filepickerService.pickMultiple(
            {
                mimetype: 'image/*',
                language: 'en',
                maxFiles: 3, //pickMultiple has one more option
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
      function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.superhero.morePictures = Blob;
                $scope.$apply();
            }
        );
    };  */

});