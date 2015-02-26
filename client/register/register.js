(function (angular) {
  "use strict";
  angular.module('myApp.register', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApp.quiz.register', {
        url: '/register',
        templateUrl: 'common/login.tpl.html',
        controller:"RegisterCtrl"
      });
  })
  .controller('RegisterCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.submitBtnText = "Register";
  	$scope.submit = function() {
      if(login.$valid) {
  		  $state.go('myApp.quiz.login');
      } else {
      alert('Invalid Credentials!')
      }
    }
  }])
  .factory('RegisterFactory',['$http',function($http) {
  	return {
  		register: function(credentials) {
  			return $http.post('/register/'+credentials.username+'/'+credentials.username);
  		}
  	}
  }]);
}(angular));
