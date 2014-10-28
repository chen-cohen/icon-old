'use strict';

/**
 * @ngdoc overview
 * @name iconApp
 * @description
 * # iconApp
 *
 * Main module of the application.
 */
angular
  .module('iconApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'SalesCtrl'
      })
	  .when('/bids', {
		templateUrl: 'views/bids.html',
		controller: 'BidsCtrl'
		})
		.when('/newBid', {
			templateUrl: 'views/newBid.html',
			controller: 'BidsCtrl'
		})

      .otherwise({
        redirectTo: '/'
      });
  });
