'use strict';

angular.module('cs410VirtualLabApp')

.controller('mainCtrl', function($scope, RANKER_INFO) {

	$scope.$watch('ranker', function(newRanker) {
		$scope.rankerInfo = RANKER_INFO[newRanker];
		$scope.parameters = {};
	});
});
