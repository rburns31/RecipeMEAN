angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	//$scope.tagline = 'To the moon and back!';

    $http.get('/getAllRecipes').
        success(function(data, status) {
            //alert("test");
        });

});