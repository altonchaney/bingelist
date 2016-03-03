angular.module('bingeList', [
		'ngAnimate',
    'ngRoute',
    'bingelist-controllers',
    'bingelist-directives',
    'bingelist-filters',
    'bingelist-factories'
])

.config([
    '$routeProvider',
    '$locationProvider',
    '$httpProvider',
  function($routeProvider, $locationProvider, $httpProvider){
  
  	//$httpProvider.responseInterceptors.push('myHttpInterceptor');
		//var spinnerFunction = function spinnerFunction(data, headersGetter) {
		//	$("#spinner").show();
		//	return data;
		//};
		//$httpProvider.defaults.transformRequest.push(spinnerFunction);
  
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
      //$locationProvider.hashPrefix('!');
  }
]);
