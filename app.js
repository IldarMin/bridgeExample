;(function() {
  'use strict';
  angular.module('app', []);

  angular.module('app')
         .controller('mainCtrl', ['$scope', mainCtrl]);

  function mainCtrl($scope) {
    $scope.result = '';
    $scope.processMe1 = function(text) {
      $scope.result = text.toUpperCase();
    };
    $scope.processMe2 = function(text) {
      $scope.result = text.toLowerCase();
    };
  }
})();
