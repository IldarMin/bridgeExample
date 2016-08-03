;(function() {
  'use strict';
  angular
  .module('app')
  .controller('dir1Ctrl', ['$scope', dir1Ctrl]);

  function dir1Ctrl($scope) {
    $scope.onProcess = function(){
      console.log($scope.inputText);
    }
  }

})();
