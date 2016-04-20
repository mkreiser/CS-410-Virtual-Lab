'use strict';

angular.module('cs410VirtualLabApp')

.constant('RANKER_INFO', {
	'Okapi BM25': {
		parameters: [{
			name: 'k1',
			default: 1.2
		}, {
			name: 'b',
			default: 0.75
		}, {
			name: 'k3',
			default: 500.0
		}]
	},
	'Pivoted Length Normalization': {
		parameters: [{
			name: 's',
			default: 0.2
		}]
	},
	'Absolute Discount Smoothing': {
		parameters: [{
			name: 'delta',
			default: 0.7
		}]
	},
	'Jelinek-Mercer Smoothing': {
		parameters: [{
			name: 'lambda',
			default: 0.7
		}]
	},
	'Dirichlet-Prior Smoothing': {
		parameters: [{
			name: 'mu',
			default: 2000.0
		}]
	}
});
