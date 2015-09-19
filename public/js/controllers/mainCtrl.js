'use strict';

angular.module('stride-test.mainCtrl', [
	'stride-test.inventoryService',
	'stride-test.modalCart'
])
.controller('mainCtrl', ['$scope', 'inventoryService', function($scope, inventoryService) {
	$scope.showCart = false;
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
}]);