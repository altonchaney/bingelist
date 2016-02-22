angular.module('bingelist-controllers', [])

// SHOW CONTROLLERS

.controller('tvshowsCtrl', function($scope, $http){
  $http.get('http://api.tvmaze.com/shows')
    .then(function(tvshows){
      $scope.tvshows = tvshows.data;
    });
})

.controller('tvshowCtrl', function($scope, $http, $routeParams, filterFilter){

	$scope.selectedKind = [];
	$scope.episodeKinds = [{
		id: 1,
		name: 'required'
	}, {
		id: 2,
		name: 'maybe'
	}, {
		id: 3,
		name: 'filler'
	}];
	
	$scope.setSelectedKind = function () {
		var id = this.episodeKinds.id;
		if (_.contains($scope.selectedKind, id)) {
			$scope.selectedKind = _.without($scope.selectedKind, id);
		} else {
			$scope.selectedKind.push(id);
		}
		return false;
	};
  
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
});
			