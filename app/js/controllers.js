'use strict';

/* Controllers */


angular.module('Weather.controllers', [])
    .controller('CurrentWeatherController', ['$scope', 'WeatherDataTransformService', function($scope, WeatherDataTransformService) {

        WeatherDataTransformService({}, function(data){
           jQuery.extend($scope, data);
        });



    }])
    .controller('ExtendedWeatherController', ['$scope', 'WeatherDataTransformService', function($scope, WeatherDataTransformService) {

        WeatherDataTransformService({}, function(data){
            jQuery.extend($scope, data);
        });

    }]);