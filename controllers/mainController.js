angular.module("elcomaApp", []).controller('MainController', ['$scope', 'ElcomaService', function($scope, ElcomaService){
	$scope.name = 'Natanael Santos';
	console.log($scope.name);
	ElcomaService.success(function(data){
		$scope.elcomaData = data;
	}).error(function(data){
		console.log(data);
	});
}]);