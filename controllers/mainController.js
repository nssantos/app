angular.module("elcomaApp", []).controller('MainController', ['$scope', 'ElcomaService', function($scope, ElcomaService){
	$scope.name = 'Natanael Santos';
	console.log($scope.name);
	ElcomaService.sucess(function(data){
		$scope.elcomaData = data;
	})
}]);