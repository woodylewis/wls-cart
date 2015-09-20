'use strict';

angular.module('stride-test.modalCart', [])
.directive('modalCart', function () {
	return {
		restrict: 'EA',
		scope: {
			show: '=',
			total: '=',
			clearItems: '&'
		},
		replace: true,
		transclude: true,
		link: function(scope, element, attrs) {
			scope.dialogStyle = {};
			if(attrs.width) {
				scope.dialogStyle.width = attrs.width;
			}
			if(attrs.height) {
				scope.dialogStyle.height = attrs.height;
			}
			scope.hideModal = function() {
				scope.show = false;
			};

			scope.clearCart = function() {
				//--Call the controller's clearCart function --
				//--that is mapped to the clear-items in the isolate scope
				scope.clearItems();
				scope.show = false;
			}
		}, 
		templateUrl: 'templates/modalCart.html'
	};
});