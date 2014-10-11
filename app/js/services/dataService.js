millionDollarFoodIdea.factory('dataService', ['$window','$http', function($http) {
	
	return {
		get: getDataFromEndpoint
	};

	function getDataFromEndpoint(postObject) {
		alert('Get data from endpoint in data service');
		console.log(postObject);
		var data = postObject;

		$http.post('/someUrl', data).
		  success(function(data, status, headers, config) {
		    $scope.restaurant = data;
		  }).
		  error(function(data, status, headers, config) {
		    alert('Not So fast! Try Agains')
		  });
	};


}]);