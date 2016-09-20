angular.module("elcomaApp", []).controller('MainController', ['$scope', 'ElcomaService', function($scope, ElcomaService){
	$scope.name = 'Natanael Santos';
	console.log($scope.name);
	ElcomaService.success(function(data){
		$scope.elcomaData = data;
		var i = 0;
		for (x in $scope.elcomaData){
			
			console.log(i);
			i++;
			console.log(x.date);
		}
	}).error(function(data){
		console.log(data);
	});
}]);