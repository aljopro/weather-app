'use strict';

// Declare app level module which depends on filters, and services
angular.module('Weather', ['Weather.filters', 'Weather.services', 'Weather.directives', 'Weather.controllers']).
    config(['$routeProvider', function($routeProvider) {
        //$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        //$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.when('/current/:location', {templateUrl: 'partials/current-weather.html', controller: 'CurrentWeatherController'});
        $routeProvider.when('/extended/:location',{templateUrl: 'partials/extended-weather.html', controller: 'ExtendedWeatherController'});
        $routeProvider.otherwise({redirectTo: '/current/75081'});
    }]);