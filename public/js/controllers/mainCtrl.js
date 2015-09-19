'use strict';

angular.module('stride-test.mainCtrl', [
	'stride-test.inventoryService',
	'stride-test.modalCart'
])
.controller('mainCtrl', ['$scope', 'inventoryService', function($scope, inventoryService) {
	$scope.showCart = false;
	$scope.milk=0;
	$scope.dark=0;
	$scope.white=0;
	$scope.sugarfree=0;
	$scope.total = 1000;
	inventoryService.fetchInventory()
	.then(function (data) {
		$scope.chocolates = data;
	}),
	function (error) {
		console.log('error on fetchInventory - ', error);
	};

	$scope.toggleCart = function() {
		$scope.showCart = !$scope.showCart;
	};

	$scope.clearCart = function() {
		$scope.total = 0;
	};
}]);