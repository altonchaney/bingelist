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
  var showId = 563;
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