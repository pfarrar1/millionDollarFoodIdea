'use strict';


// Declare app level module which depends on filters, and services
var millionDollarFoodIdea = angular.module('millionDollarFoodIdea', ['ngRoute'])


millionDollarFoodIdea.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/', {templateUrl: 'app/views/search.html'});
  $routeProvider.when('/view', {templateUrl: 'app/views/restaurantProfile.html'});
  $routeProvider.otherwise({redirectTo: '/'});


}]);