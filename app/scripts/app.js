'use strict';

/**
 * @ngdoc overview
 * @name cs410VirtualLabApp
 * @description
 * # cs410VirtualLabApp
 *
 * Main module of the application.
 */
angular
  .module('cs410VirtualLabApp', [
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
