'use strict';

/**
 * @ngdoc overview
 * @name cineAngularApp
 * @description
 * # cineAngularApp
 *
 * Main module of the application.
 */
angular
  .module('cineAngularApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl'//,
      //  controllerAs: 'popular'
      })
      .when('/search/:query', {
        templateUrl: 'views/popular.html',
        controller: 'SearchCtrl'//,
      //  controllerAs: 'search'
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });
