'use strict';
angular.module('app').directive('frontDesign', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'js/imageComposition/front.template.svg'
    };
}]);
