'use strict';

angular.module('stride-test', [
	'ui.router',
	'stride-test.mainCtrl'
])
.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider ) {

	$urlRouterProvider
	.otherwise('/index');
	
	$stateProvider
    .state('main', {
      url: "/main",
      views: {
        "state" : { templateUrl: "partials/main.html" }
      }
    });
}]);