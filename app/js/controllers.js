'use strict';

/* Controllers */


angular.module('Weather.controllers', [])
    .controller('CurrentWeatherController', ['$scope', '$routeParams', 'WeatherDataTransformService','BroadcastService', function($scope, $routeParams, WeatherDataTransformService, BroadcastService) {

        $scope.location = $routeParams.location;
        BroadcastService.prepForBroadcast($scope.location);

        WeatherDataTransformService({q: $scope.location }, function(data){
            jQuery.extend($scope, data);
        });

        $scope.$on('handleBroadcast', function() {
            $scope.location =  BroadcastService.message;
            WeatherDataTransformService({q: $scope.location }, function(data){
                jQuery.extend($scope, data);
            });
        });


    }])
    .controller('ExtendedWeatherController', ['$scope', '$routeParams', 'WeatherDataTransformService','BroadcastService', function($scope, $routeParams, WeatherDataTransformService, BroadcastService) {
        $scope.location = $routeParams.location;
        BroadcastService.prepForBroadcast($scope.location);

        WeatherDataTransformService({q: $scope.location }, function(data){
            jQuery.extend($scope, data);
        });

        $scope.$on('handleBroadcast', function() {
            $scope.location =  BroadcastService.message;
            WeatherDataTransformService({q: $scope.location }, function(data){
                jQuery.extend($scope, data);
            });
        });

    }])
    .controller('LocationController', ['$scope', '$routeParams','BroadcastService', function($scope, $routeParams, BroadcastService) {
        $scope.addLocation = function(msg) {
            BroadcastService.prepForBroadcast(msg);
        };

        $scope.$on('handleBroadcast', function() {
            $scope.location = BroadcastService.message;
        });


    }]);