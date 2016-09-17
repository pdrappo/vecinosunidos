'use strict';

/**
 * @ngdoc service
 * @name vecinosunidosApp.api
 * @description
 * # api
 * Factory in the vecinosunidosApp.
 */
angular.module('vecinosunidosApp')
  .factory('api', function ($http, $q) {
    
    var apiUrl = "http://localhost:8080/";
    var apiObj = {};

    apiObj.get = function(url){
      return $http.get(apiUrl + url);
    };

    apiObj.post = function(url, data){
      return $http.post(apiUrl + url, data);
    };

    apiObj.update = function(url,  data){
      return $http.put(apiUrl + url, data);
    };

    apiObj.delete = function(url){
      return $http.delete(apiUrl + url);
    };

    // Public API here
    return apiObj;

  });
