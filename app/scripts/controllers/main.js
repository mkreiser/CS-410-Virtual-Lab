'use strict';

angular.module('cs410VirtualLabApp')

.controller('mainCtrl', function($http, $scope, RANKER_INFO) {

	$scope.$watch('ranker', function(newRanker) {
		$scope.rankerInfo = RANKER_INFO[newRanker];
		$scope.parameters = {};
	});

	$scope.sendQueryRunner = function() {
		if ($scope.query === '' || $scope.query === undefined || $scope.ranker === undefined) {
			return;
		}

		var requestObj = {
			query: $scope.query,
			ranker: $scope.rankerInfo.requestName
		};

		angular.forEach($scope.rankerInfo.parameters, function(p) {
			requestObj[p.name] = $scope.parameters[p.name];
		});

		console.log(requestObj);

		$http.post('http://localhost:9001/', requestObj)
			.then(function(response) {
				console.log(response);
			});
	};
});
