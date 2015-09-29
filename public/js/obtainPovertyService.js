'use strict';
var usausa = angular.module('usausa')
usausa.factory('getPovertyData', ['$http', function($http){
  return {
    getPoverty: function() {
      return $http.get('localhost:3000/api/v1/poverty/data')
    }
  }
}])
