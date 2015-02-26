(function (angular) {
  "use strict";
  angular.module('myApp.quiz', ['ui.router', 'myApp.quiz.questions','myApp.login','myApp.register'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApp.quiz', {
        url: '/quiz',
        abstract:true,
        templateUrl: 'quiz/quiz.tpl.html'
      });
  });
}(angular));
