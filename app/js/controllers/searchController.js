millionDollarFoodIdea.controller('searchController', ['$scope', '$http', function($scope, $http) {

	$scope.submitRestaurantSearch = function(restaurant) {

		var name = restaurant.name;
		var zipcode = restaurant.zipCode;

		$http.get('http://drinkndev.herokuapp.com/get-restaurant/?name='+name+'&zipcode='+zipcode).
		  success(function(data, status, headers, config) {
				console.log('success on the api call');
		    $scope.result = data;
		  }).
		  error(function(data, status, headers, config) {
		    console.log('failure on the api call');
		  });
		};
	
}]);