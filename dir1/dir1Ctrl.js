;(function() {
  'use strict';
  angular
  .module('app')
  .controller('dir1Ctrl', ['$scope', dir1Ctrl]);

  function dir1Ctrl($scope) {
    console.log($scope.process);
    $scope.onProcess = function(){
      $scope.process($scope.inputText);
      // console.log($scope.inputText);
    }
  }

})();
