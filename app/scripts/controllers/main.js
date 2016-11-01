'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


var app = angular.module("angularApp", []);

app.controller("SomeController", function($scope){
  $scope.expanders = [
    {title: "Titre 1",
     text: "Contenu 1"},
    {title: "Titre 2",
     text: "Contenu"},
    {title: "Titre 3",
     text: "Contenu 3"}
  ];
});

app.controller("myController", function($scope){
  $scope.greeting = 'hello';
});

app.directive("accordion", function(){
  return {
    restrict: 'EA', // Comment la déclaration de la directive doit se faire dnas le code HTML.
    replace: true, // Remplace l'élément
    transclude: true, // La directive supprimera le contenu orginal et le rendra disponible pour le réinsérer à l'intérieur du template en utlisant la directive ng-transclude.
    template: "<div ng-transclude></div>",
    controller: function(){ // Crée un controlleur
      var expanders = [];
      this.gotOpened = function(selectedExpander){
        expanders.forEach(function(expander){
          if(selectedExpander !== expander){
            expander.showMe = false;
          }
        });
      };
      this.addExpander = function(expander){
        expanders.push(expander);
      };

    }
  };
});

app.directive("expander", function(){
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    require: '^?accordion', // Indique qu'une autre directive est requise pour que celle-ci fonctionne correctement.
    scope: {title: '=expanderTitle'},
    template: '<div>' + '<div class="title" ng-click="toggle()">{{title}}</div>' + '<div class="body" ng-show="showMe" ng-transclude></div>' + '</div>',
    link : function(scope, element, attrs, accordionController){ // Fonctions qui vont être utilisées dans le processus de manipulation du DOM, ajout de listeners...
      scope.showMe = false;
      accordionController.addExpander(scope);
      scope.toggle = function toggle(){
        scope.showMe = !scope.showMe;
        accordionController.gotOpened(scope);
      };
    }
  };
});

app.filter('reverse', function(){
  return function(input, uppercase){
    input = input || '';
    var out = "";
    for(var i = 0; i < input.length; i++){
      out = input.charAt(i) + out;
    }
    if(uppercase){
      out = out.toUpperCase();
    }
    return out;
  };
});
