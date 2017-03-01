'use strict';
angular.module('app').directive('heroBackground', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'js/home/hero_background.svg'
    };
}]);
