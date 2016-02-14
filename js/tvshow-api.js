angular.module('tvshow-api', ['tvshow-data'])

.service('tvshowAPI', function($http, tvshowData){
  var api_root = 'http://api.tvmaze.com'
  var data = tvshowData;

  var path = function(endpoint){
    return api_root + '/' + endpoint
  }

  var callbacks = {
    'shows': function(result){
      data.set('tvshows', result.data)
    },
    'show': function(result){
      data.set('tvshow', result.data)
    }
  }

  this.GET = function(endpoint){
    var request = $http.get( path(endpoint) )
    request.then( callbacks[endpoint] )
    return request
  }

})