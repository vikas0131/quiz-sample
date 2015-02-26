angular.module('myApp.quiz.questions', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.quiz.questions', {
      url: '/questions',
      templateUrl: 'questions/questions.tpl.html',
      controller: 'QuestionsCtrl'
    });
})
.controller('QuestionsCtrl', function ($scope) {
  $scope.message = 'Yooo!';
});
