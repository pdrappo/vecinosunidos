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

    //Obtiene un barrio
    barriosObj.getAll = function(){
      return api.get("barrios");
    }

    //Crea un barrio
    barriosObj.create = function(data){
      return api.post("barrios", data);
    }

    //Actualiza un barrio
    barriosObj.update = function(id, data){
      return api.update("barrios/" + id, data);
    }

    //Elimina un barrio
    barriosObj.delete = function(id, data){
      return api.delete("barrios/" + id);
    }

    // Public API here
    return barriosObj;
  });
