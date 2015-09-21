'use strict';

angular.module('stride-test.inventoryService', [])
.factory('inventoryService' , ['$q', '$http', 
	function($q, $http) {
		var inventoryUrl = 'data/inventory.json';

		var fetchInventory = function() {
			var deferred = $q.defer();

			$http.get(inventoryUrl)
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