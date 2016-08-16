angular.module('AddRecipeCtrl', []).controller('AddRecipeController', function($scope, $http) {

	//$scope.tagline = 'Nothing beats a pocket protector!';

	$http.post('/postRecipe').
        success(function(data, status) {
            //alert("test");
        });

});