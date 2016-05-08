'use strict';

angular.module('cs410VirtualLabApp')

.constant('RANKER_INFO', {
	'Okapi BM25': {
		requestName: 'bm25',
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
		requestName: 'pivoted-length',
		parameters: [{
			name: 's',
			default: 0.2
		}]
	},
	'Absolute Discount Smoothing': {
		requestName: 'absolute-discount',
		parameters: [{
			name: 'delta',
			default: 0.7
		}]
	},
	'Jelinek-Mercer Smoothing': {
		requestName: 'jelinek-mercer',
		parameters: [{
			name: 'lambda',
			default: 0.7
		}]
	},
	'Dirichlet-Prior Smoothing': {
		requestName: 'dirichlet-prior',
		parameters: [{
			name: 'mu',
			default: 2000.0
		}]
	}
});
