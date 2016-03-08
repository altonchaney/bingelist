angular.module('bingelist-controllers', [])

// SHOW CONTROLLERS

.controller('tvshowsCtrl', function($scope, $http){

	// for each file name, get corresponding tvmaze data
	
  $http.get('http://api.tvmaze.com/shows')
    .then(function(tvshows){
      $scope.tvshows = tvshows.data;
    });
  
  // i need to isolate the show data i get to only the shows with corresponding json files
  // for each show i need to get the episode count by id a la the individual show controller
  // for each show i need to get my json file by id and count the amount of filler / maybe / required episodes 
  
})

.controller('tvshowCtrl', function($scope, $http, $routeParams){
  
  //var showId = $routeParams.showId; //testing one show
  var showId = 158;
  
  $http.get('../list/' + showId + '.json')
		.then(function(bingelist){
			
			$scope.bingelist = bingelist.data;
			
			// a failed array counter
// 			function foo(arr) {
// 				var b = [], prev;
// 		
// 				arr.sort();
// 				for ( var i = 0; i < arr.length; i++ ) {
// 						if ( arr[i] !== prev ) {
// 								b.push(1);
// 						} else {
// 								b[b.length-1]++;
// 						}
// 						prev = arr[i];
// 				}
// 		
// 				return [b];
// 			}
// 			
// 			var fooresult = foo($scope.bingelist.season.episode);
// 			
// 			console.log("# of eps: " + fooresult);
			
			$http.get('http://api.tvmaze.com/shows/' + showId + '?embed=previousepisode')
				.then(function(tvshow){
				
					$scope.tvshow = tvshow.data;
					console.log('i got the tvshow stuff');
					
					$http.get('http://api.tvmaze.com/shows/' + showId + '/episodes')
						.then(function(episodes){
							$scope.episodes = episodes.data;
							$scope.maxSeasons = Math.max.apply(Math,$scope.episodes.map(function(episode){return episode.season;}));
							console.log('i got the episode stuff');
						});
				});
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
	
	// show episode details
	$scope.isClosed = true;
});
			