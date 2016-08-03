;(function() {
  'use strict';
  angular
  .module('app')
  .directive('dir1', dir1);

  function dir1() {
    return {
      scope: {
      },
      restrict: 'E',
      controller: 'dir1Ctrl',
      templateUrl: 'dir1/dir1Tmpl.html'
    };
  }
})();
