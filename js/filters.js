angular.module('bingelist-filters', [])

//two digit formatter
.filter('twodigit', function () {
	return function(input) {
		if (input < 10) { 
			input = '0' + input;
		}
		return input;
	}
});

