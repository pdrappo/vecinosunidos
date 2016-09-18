'use strict';

/**
 * @ngdoc overview
 * @name vecinosunidosApp
 * @description
 * # vecinosunidosApp
 *
 * Main module of the application.
 */
angular
  .module('vecinosunidosApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ingresar', {
        templateUrl: 'views/ingresar.html',
        controller: 'IngresarCtrl',
        controllerAs: 'ingresar'
      })
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro'
      })
      .when('/barrios', {
        templateUrl: 'views/barrios.html',
        controller: 'BarriosCtrl',
        controllerAs: 'barrios'
      })
      .when('/portal', {
        templateUrl: 'views/portal.html',
        controller: 'PortalCtrl',
        controllerAs: 'portal'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/usuario', {
        templateUrl: 'views/usuario.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'usuario'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
