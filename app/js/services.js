'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

var module = angular.module('Weather.services', ['ngResource']);
module.factory('BroadcastService', function($rootScope) {

    return {
        message: '',
        prepForBroadcast: function (msg) {
            this.message = msg;
            this.broadcastItem();
        },
        broadcastItem: function () {
            $rootScope.$broadcast('handleBroadcast');
        }
    };

});

module.factory('WeatherService', function($resource){
    return $resource('http://api.worldweatheronline.com/free/v1/weather.ashx', {}, {
        get: {method:'JSONP', params:{q: '75081', format: 'json', num_of_days: 5, includeLocation: "yes", key: "cssfbjkh42unnucm6y4wxwpn", callback: "JSON_CALLBACK" }}
    });
});
module.factory('WeatherDataTransformService',['WeatherService', function(WeatherService){
    return function(params, successFunction){

        WeatherService.get(params, function(wData){
            var data, currentWeather, weather, result = {};

            data = wData.data;


            if(typeof data === 'undefined' || data == null){
                return null;
            }

            currentWeather = {
                weatherDescription: data.current_condition[0].weatherDesc[0].value,
                temp: data.current_condition[0].temp_F
            };
            jQuery.extend(currentWeather, data.current_condition[0]);



            weather = data.weather;


            for(var i = 0; i < weather.length; i++){
                weather[i].maxTemp = weather[i].tempMaxF;
                weather[i].minTemp = weather[i].tempMinF;
                weather[i].weatherDescription = weather[i].weatherDesc[0].value;
            }

            weather.today = weather[0];

            result.location = data.nearest_area[0].areaName[0].value + ", " + data.nearest_area[0].region[0].value;
            result.current = currentWeather;
            result.weather = weather;

            result.weatherData = wData.data;
            console.log(result.weatherData);

            successFunction(result);


        });

    }

}]);



