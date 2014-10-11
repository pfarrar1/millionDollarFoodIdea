millionDollarFoodIdea.controller('searchController', ['$scope', '$http','dataService', function($scope, $http, dataService) {
	
	$scope.greeting = "faskjhasdfjklh";

	$scope.restaurant = '',

	$scope.submitRestaurantSearch = function(restaurant) {
		// dataService.get(restaurant);

		var name = restaurant.name;
		var zipcode = restaurant.zipCode;

	// Simple GET request example :
	$http.get('http://drinkndev.herokuapp.com/get-restaurant/?name='+name+'&zipcode='+zipcode).
	  success(function(data, status, headers, config) {
			alert('success');
	    $scope.result = data;
	  }).
	  error(function(data, status, headers, config) {
	    alert('failure');
	  });


	};


	// $scope.restaurants = [
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	},
	// 	{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	}
	// 	,{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	},
	// 	{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	},
	// 	{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	},
	// 	{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	}
	// 	,{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	},
	// 	{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	},
	// 	{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	},
	// 	{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	}
	// 	,{
	// 		name: 'Hot Dougs',	
	// 	},
	// 	{
	// 		name: 'Kumas',	
	// 	},
	// 	{
	// 		name: "Larry's"
	// 	}
	// ]
	
}]);