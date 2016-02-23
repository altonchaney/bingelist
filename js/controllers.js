angular.module('bingelist-controllers', [])

// SHOW CONTROLLERS

.controller('tvshowsCtrl', function($scope, $http){
  $http.get('http://api.tvmaze.com/shows')
    .then(function(tvshows){
      $scope.tvshows = tvshows.data;
    });
})

.controller('tvshowCtrl', function($scope, $http, $routeParams){
  
  //var showId = $routeParams.showId; //testing one show
  var showId = 158;
  
  $http.get('http://api.tvmaze.com/shows/' + showId + '?embed=previousepisode')
    .then(function(tvshow){
      $scope.tvshow = tvshow.data;
    });
  
  $http.get('http://api.tvmaze.com/shows/' + showId + '/episodes')
    .then(function(episodes){
      $scope.episodes = episodes.data;
      $scope.maxSeasons = Math.max.apply(Math,$scope.episodes.map(function(episode){return episode.season;}));
    });
  
  $http.get('../list/' + showId + '.json')
    .then(function(bingelist){
      $scope.bingelist = bingelist.data;
    });
  
  // filter animations
  $scope.required = true;
	$scope.togglerequired = function() {
		console.log('animating requireds');
		$scope.required = $scope.required === false ? true: false;
		console.log('change required to ' + $scope.required);
	};
	$scope.maybe = true;
	$scope.togglemaybe = function() {
		console.log('animating maybes');
		$scope.maybe = $scope.maybe === false ? true: false;
		console.log('change maybe to ' + $scope.required);
	};
	$scope.filler = true;
	$scope.togglefiller = function() {
		console.log('animating fillers');
		$scope.filler = $scope.filler === false ? true: false;
		console.log('change filler to ' + $scope.required);
	};
	$scope.allkinds = true;
	$scope.toggleallkinds = function() {
		console.log('animating allkinds');
		$scope.allkinds = $scope.allkinds === false ? true: false;
		if ($scope.allkinds === true) {
			if ($scope.required !== true) {
				$scope.togglerequired();
			}
			if ($scope.maybe !== true) {
				$scope.togglemaybe();
			}
			if ($scope.filler !== true) {
				$scope.togglefiller();
			}
		} else {
			if ($scope.required === true) {
				$scope.togglerequired();
			}
			if ($scope.maybe === true) {
				$scope.togglemaybe();
			}
			if ($scope.filler === true) {
				$scope.togglefiller();
			}
		}
	};
	
  
  // trying to count up duplicates in the episode array i provide
  // $scope.kindData = [];
//   $scope.stats = function() {
//     $scope.results = {};
//     for (var i = 0; i < $scope.kindData.length; i++) {
//       var kind = $scope.kindData[i];
//       if(kind) {
//         if ($scope.results.hasOwnProperty(kind)) {
//           $scope.results[kind]++;
//         } else {
//           $scope.results[kind] = 1;
//         }
//       }
//     }
//   };
  
});
			