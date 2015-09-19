'use strict';

angular.module('stride-test.modalCart', [])
.directive('modalCart', function () {
	return {
		restrict: 'E',
		scope: {
			show: '=',
			total: '='
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
				scope.total = 0;
			};
		}, 
		templateUrl: 'templates/modalCart.html'
	};
});