'use strict';
angular.module('app').directive('progressBar', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'js/app/progress_bar.svg'
    };
}]);
