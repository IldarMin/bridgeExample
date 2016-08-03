;(function() {
  'use strict';
  angular.module('app', []);

  angular.module('app')
         .controller('mainCtrl', ['$scope', mainCtrl]);

  function mainCtrl($scope) {

    $scope.processMe1 = function(text) {
      console.log(text, '     processMe1');
    };
    $scope.processMe2 = function(text) {

    };
  }
})();
