angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location) {

	// Populate the recipes list from the database
    $http.get('/getRecipes').
        success(function(data, status) {
            $scope.recipes = data;
        });

    $scope.addRecipe = function() {
    	$location.url('/addRecipe');
    };

	/**$scope.deleteRecipe(recipe, $index)

	$scope.recipeSelected(recipe.name)

	$scope.showRemoveRecipe()

	$scope.hideRemoveRecipe()*/

});