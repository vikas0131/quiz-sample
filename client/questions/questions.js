(function (angular) {
  "use strict";
angular.module('myApp.quiz.questions', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('myApp.quiz.questions', {
      url: '/questions',
      templateUrl: 'questions/questions.tpl.html',
      controller: 'QuestionsCtrl'
    });
})
.controller('QuestionsCtrl', ['$scope','QuestionFactory','$state',function ($scope,QuestionFactory,$state) {
  $scope.getQuestion = function(questionNumber) {
  	QuestionFactory.getQuestion(questionNumber).then(function(questions) {
	  	$scope.question = angular.copy(questions.data);
	  	if($scope.question.lastQuestion){
	  		$scope.continueOrFinish = 'Finish';
	  	}
	  	else{
	  		$scope.continueOrFinish = 'Continue';
	  	}
	  },function(err) {
	  	$scope.questions = null;
	  });
  }
  $scope.getQuestion(1);

  $scope.submit = function() {
  	$scope.selected = null;
  	if($scope.question.lastQuestion) {
  		$state.go('myApp.quiz.login');
  	} else {
  	$scope.getQuestion($scope.question.questionNumber+1);
  	}
  }
}])
.factory('QuestionFactory',['$http',function($http) {
  	return {
  		getQuestions: function() {
  			return $http.get('/quiz/questions');
  		},
  		getQuestion: function(questionNumber) {
  			return $http.get('/quiz/getQuestion/'+questionNumber);
  		}
  	}
  }]);;
}(angular));
