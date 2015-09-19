'use strict';

angular.module('stride-test.mainCtrl', [
	'stride-test.inventoryService'
])
.controller('mainCtrl', ['$scope', function($scope) {
	console.log('mainCtrl ');
}]);