angular.module("elcomaApp", []).factory('ElcomaService', ['$http', function($http){
	return $http.get('http://vagalumewifi.com.br/timeline.json')
	.success(function(data){
		
	})
	.error(function(err){
		return err;
	});
}]);