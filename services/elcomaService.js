angular.module("elcomaApp").factory('ElcomaService', ['$http', function($http){
	return $http({
		method: 'JSONP',
		url: 'http://vagalumewifi.com.br/timeline.json'
	}).success(function(response){
		return response.data;
	}).error(function(err){
		return err;
	});
	
}]);