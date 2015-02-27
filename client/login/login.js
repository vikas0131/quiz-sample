(function (angular) {
  "use strict";
  angular.module('myApp.login', ['ui.router','myApp.quiz.questions'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApp.quiz.login', {
        url: '/login',
        templateUrl: 'common/login.tpl.html',
        controller:"LoginCtrl"
      });
  })
  .controller('LoginCtrl', ['$scope','$state',function ($scope,$state) {
  	$scope.submitBtnText = "Login";
  	$scope.submit = function() {
  		if($scope.login.$valid) {
  			$state.go('myApp.quiz.questions');
  		} else {
  		alert('Invalid Credentials!');
  		}
  	}
  }])
  .factory('LoginFactory',['$http',function($http) {
  	return {
  		login: function(credentials) {
  			return $http.get('/login/'+credentials.username+'/'+credentials.username);
  		}
  	}
  }]);
}(angular));
