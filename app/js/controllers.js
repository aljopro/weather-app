'use strict';

/* Controllers */


angular.module('Weather.controllers', []).
    controller('CurrentWeatherController', ['$scope', 'WeatherDataTransformService', function($scope, WeatherDataTransformService) {

        console.log(this);

        WeatherDataTransformService({}, function(data){
           $scope.location = data.location;
        });



    }]);