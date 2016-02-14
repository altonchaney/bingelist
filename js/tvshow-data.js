angular.module('tvshow-data', [])

.service('tvshowData', function($rootScope){
  var service = this;

  this.data = {}

  this.set = function(property, value){
    service.data[property] = value
    $rootScope.$broadcast('data:update', property)
  }

})
