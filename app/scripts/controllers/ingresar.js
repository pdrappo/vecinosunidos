'use strict';

/**
 * @ngdoc function
 * @name vecinosunidosApp.controller:IngresarCtrl
 * @description
 * # IngresarCtrl
 * Controller of the vecinosunidosApp
 */
angular.module('vecinosunidosApp')
  .controller('IngresarCtrl', function ($scope, barrio) {
  	barrio.getAll();
  });