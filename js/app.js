angular.module('bingeList', [
    'ngRoute',
    'bingelist-controllers',
    'bingelist-directives',
    'bingelist-filters'
])

.config([
    '$routeProvider',
    '$locationProvider',
  function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'html/home.html',
        controller : 'tvshowsCtrl'
      })
      .when('/shows', {
        templateUrl: 'html/searchList.html',
        controller : 'tvshowsCtrl'
      })
      .when('/shows/:showId', {
        templateUrl: 'html/showDetail.html',
        controller : 'tvshowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
  }
]);
