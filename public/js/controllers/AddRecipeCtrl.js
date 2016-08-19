angular.module('AddRecipeCtrl', []).controller('AddRecipeController', function($scope, $http, $location) {

    // Add the recipe
    $scope.postRecipe = function(recipe) {
        //alert(recipe.name);
        $http.post('/postRecipe', {
        	name: recipe.name,
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

});