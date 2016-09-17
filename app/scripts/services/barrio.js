'use strict';

/**
 * @ngdoc service
 * @name vecinosunidosApp.barrios
 * @description
 * # barrios
 * Factory in the vecinosunidosApp.
 */
angular.module('vecinosunidosApp')
  .factory('barrio', function (api) {
    
    var barriosObj = {};

    //Obtiene todos los barrios
    barriosObj.getAll = function(){
      return api.get("barrios");
    }

    //Obtiene todos los barrios
    barriosObj.create = function(data){
      return api.post("barrios", data);
    }

    //Obtiene todos los barrios
    barriosObj.update = function(id, data){
      return api.update("barrios/" + id, data);
    }

    //Obtiene todos los barrios
    barriosObj.delete = function(id, data){
      return api.delete("barrios/" + id);
    }

    // Public API here
    return barriosObj;
  });
