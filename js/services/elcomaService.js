angular.module("elcomaApp").factory('ElcomaService', ['$http', function($http) {
  return $http.get('timeline.json')
    .success(function(data) {
      return data;
    }).error(function(err){
      return data;
    });
}]);