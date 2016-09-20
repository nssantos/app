var app = angular.module("elcomaApp", ['MainController', 'ngMaterial', 'ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: 'MainController',
		templateUrl: 'views/timeline.html'
	}).otherwise({
		redirectTo: '/'
	});
});
