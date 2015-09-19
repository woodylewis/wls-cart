'use strict';

angular.module('stride-test.inventoryService', [])
.factory('inventoryService' , ['$q', '$http', 
	function($q, $http) {
		var invetoryUrl = 'http://localhost:3000/data/inventory.json';

		var fetchInventory = function() {
			var deferred = $q.defer();

			$http.get(invetoryUrl)
			.success( function(data) {
				deferred.resolve(data);
			})
			.error(function(reason) {
				deferred.reject(reason);
			});
			return deferred.promise;
		};

	return {
		fetchInventory: function() {
			return fetchInventory();
		}
	};
}]);