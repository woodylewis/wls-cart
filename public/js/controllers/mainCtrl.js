'use strict';

angular.module('stride-test.mainCtrl', [
	'stride-test.inventoryService',
	'stride-test.modalCart'
])
.controller('mainCtrl', ['$scope', 'inventoryService', function($scope, inventoryService) {	
	$scope.init = function() {
		$scope.showCart = false;
		$scope.numItems = 0;
		$scope.milk=0;
		$scope.dark=0;
		$scope.white=0;
		$scope.sugarfree=0;
		$scope.total=0;
	}

	$scope.init();

	//---Read data from the json file
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
		$scope.init();
	};

	$scope.addItem = function(id) {
		switch (id) {
			case 1 :
				$scope.milk++;
				$scope.total+= $scope.chocolates.chocolates[0].price;
			break;
			case 2 :
				$scope.dark++;
				$scope.total+= $scope.chocolates.chocolates[1].price;
			break;
			case 3 :
				$scope.white++;
				$scope.total+= $scope.chocolates.chocolates[2].price;
			break;
			case 4 :
				$scope.sugarfree++;
				$scope.total+= $scope.chocolates.chocolates[3].price;
			break;
			default:
				console.log('no id for item');
		}
		$scope.numItems++;
	};
}]);