var app = angular.module("elcomaApp", ['ngRoute']);
 app.config(function($routeProvider){
	$routeProvider.when('/ola', {
		controller: 'MainController',
		templateUrl: 'views/timeline.html'
	}).otherwise({
		redirectTo: '/'
	});
}); 
