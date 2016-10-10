angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
    
        .when('/recipeDetails', {
			templateUrl: 'views/recipeDetails.html',
			controller: 'MainController'
		})

		.when('/addRecipe', {
			templateUrl: 'views/addRecipe.html',
			controller: 'AddRecipeController'
		});

	$locationProvider.html5Mode(true);

}]);