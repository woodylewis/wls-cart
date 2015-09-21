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
		$scope.milkPrice=0;
		$scope.dark=0;
		$scope.darkPrice=0;
		$scope.white=0;
		$scope.whitePrice=0;
		$scope.sugarfree=0;
		$scope.sugarfreePrice=0;
		$scope.total=0;
	}

	$scope.init();

	//---Read data from the json file
	inventoryService.fetchInventory()
	.then(function (data) {
		$scope.chocolates = data;
		$scope.milkPrice=$scope.chocolates.chocolates[0].price;
		$scope.darkPrice=$scope.chocolates.chocolates[1].price;
		$scope.whitePrice=$scope.chocolates.chocolates[2].price;
		$scope.sugarfreePrice=$scope.chocolates.chocolates[3].price;
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
				$scope.total+= $scope.milkPrice;
			break;
			case 2 :
				$scope.dark++;
				$scope.total+= $scope.darkPrice;
			break;
			case 3 :
				$scope.white++;
				$scope.total+= $scope.whitePrice;
			break;
			case 4 :
				$scope.sugarfree++;
				$scope.total+= $scope.sugarfreePrice;
			break;
			default:
				console.log('no id for item');
		}
		$scope.numItems++;
	};

	$scope.removeItem = function(id) {
		switch (id) {
			case 1 :
				$scope.numItems-= $scope.milk;
				$scope.total-= ($scope.milk * $scope.milkPrice);
				$scope.milk=0;
			break;
			case 2 :
				$scope.numItems-= $scope.dark;
				$scope.total-= ($scope.dark * $scope.darkPrice);
				$scope.dark=0;
			break;
			case 3 :
				$scope.numItems-= $scope.white;
				$scope.total-= ($scope.white * $scope.whitePrice);
				$scope.white=0;
			break;
			case 4 :
				$scope.numItems-= $scope.sugarfree;
				$scope.total-= ($scope.sugarfree * $scope.sugarfreePrice);
				$scope.sugarfree=0;
			break;
			default:
				console.log('no id for item');
		}
	};
}]);