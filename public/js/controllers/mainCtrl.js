'use strict';

angular.module('stride-test.mainCtrl', [
	'stride-test.inventoryService'
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
}])
.controller('mainCtrl', ['$scope', '$state', 'inventoryService', function($scope, $state, inventoryService) {
	inventoryService.fetchInventory()
	.then(function (data) {
		$scope.chocolates = data;
		console.log($scope.chocolates);
    	$state.go('main');
	}),
	function (error) {
		console.log('error on fetchInventory - ', error);
	};
}]);