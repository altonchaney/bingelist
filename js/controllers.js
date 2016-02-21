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
      var countObj = { };
			for (var i = 0, j = bingelist.length; i < j; i++) {
				 countObj[bingelist[i]] = (countObj[bingelist[i]] || 0) + 1;
			};
			
			console.log(countObj["required"]);
			$scope.requiredCount = countObj["required"];
			$scope.maybeCount = countObj["maybe"];
			$scope.fillerCount = countObj["filler"];
    });
});

			