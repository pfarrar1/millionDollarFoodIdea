millionDollarFoodIdea.controller('searchController', ['$scope', '$http','dataService', function($scope, $http, dataService) {
	
	$scope.greeting = "faskjhasdfjklh";

	$scope.submitRestaurantSearch = function(restaurant) {
		dataService.get(restaurant);
	};


	$scope.restaurants = [
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		}
		,{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		}
		,{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		}
		,{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		},
		{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		}
		,{
			name: 'Hot Dougs',	
		},
		{
			name: 'Kumas',	
		},
		{
			name: "Larry's"
		}
	]
	
}]);