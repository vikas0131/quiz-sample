(function (angular) {
  'use strict';
  angular.module('myApp', [
    'ui.router',
    'ngFx',
    'myApp.quiz'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/myApp/quiz/register');

    $stateProvider
      .state('myApp', {
        url: '/myApp',
        abstract: true,
        template:'<ui-view/>'
      });
  });
}(angular));



