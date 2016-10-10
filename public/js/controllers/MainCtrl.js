angular.module('MainCtrl', ['ngDialog']).controller('MainController', function($rootScope, $scope, $http, $location, ngDialog) {

	// Populate the recipes list from the database
    $http.get('/getRecipes').
        success(function(data, status) {
            $scope.recipes = data;
        });
    
    $rootScope.recipeSelected = function(thisRecipe) {
        $location.url("/recipeDetails");
        $rootScope.recipe = thisRecipe;
        alert($rootScope.recipe.name);
        
    }
});