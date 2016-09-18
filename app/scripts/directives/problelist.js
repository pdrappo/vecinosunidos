'use strict';

/**
 * @ngdoc directive
 * @name vecinosunidosApp.directive:probleList
 * @description
 * # probleList
 */
angular.module('vecinosunidosApp')
  .directive('probleList', function () {
    return {
      templateUrl: 'views/proble-list.html',
      restrict: 'E'
    };
  });
