angular.module('MainCtrl', ['ngDialog']).controller('MainController', function($scope, $http, $location, ngDialog) {

	// Populate the recipes list from the database
    $http.get('/getRecipes').
        success(function(data, status) {
            $scope.recipes = data;
        });

    $scope.addRecipe = function() {
    	$location.url('/addRecipe');
    };

	$scope.recipeSelected = function(recipeName) {
		ngDialog.open({
            template: 'views/RecipeDetailsPopup.html',
            scope: $scope,
            className: 'ngdialog-theme-default'
        });
	};



	/**$scope.deleteRecipe(recipe, $index)

	$scope.showRemoveRecipe()

	$scope.hideRemoveRecipe()*/

});