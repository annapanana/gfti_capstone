'use strict';
angular.module('app').directive('backDesign', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'js/messageComposition/back.template.svg'
    };
}]);
