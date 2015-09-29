'use strict';
angular.module('usausa', []).controller('obtainPovertyData', ['$scope', '$http', 'getPovertyData', function($scope, $http, getPovertyData) {
  getPovertyData.getPoverty().success(function(data){
    console.log(data)
  }).error(function(error){
    console.log(error)
  })
}]);
