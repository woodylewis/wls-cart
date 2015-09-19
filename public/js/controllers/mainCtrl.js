'use strict';

angular.module('stride-test.mainCtrl', [
	'stride-test.inventoryService'
])
.controller('mainCtrl', ['$scope', 'inventoryService', function($scope, inventoryService) {
	inventoryService.fetchInventory()
	.then(function (inventory) {
		console.log(inventory);
	}),
	function (error) {
		console.log('error on fetchInventory - ', error);
	};
}]);