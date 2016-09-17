'use strict';

/**
 * @ngdoc service
 * @name vecinosunidosApp.auth
 * @description
 * # auth
 * Factory in the vecinosunidosApp.
 */
angular.module('vecinosunidosApp')
  .factory('auth', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
