'use strict';

/**
 * @ngdoc function
 * @name vecinosunidosApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the vecinosunidosApp
 */
angular.module('vecinosunidosApp')
  .controller('RegistroCtrl', function ($scope, barrio) {
  	barrio.getAll().then(
  		function(response){
  		$scope.barrios = response.data;
  	});
  });
