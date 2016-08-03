;(function() {
  'use strict';
  angular
  .module('app')
  .controller('dir1Ctrl', ['$scope', dir1Ctrl]);

  function dir1Ctrl($scope) {
    $scope.process = $scope.process || function() {
      console.error('define a process function');
    };

    $scope.onProcess = function(){
      $scope.process($scope.inputText);
    }
  }

})();
