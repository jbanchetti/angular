'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cineAngularApp
 */

 // Ce contrôleur n'est pas utlisé 
angular.module('cineAngularApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
