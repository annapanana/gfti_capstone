'use strict';
angular.module('app').directive('wildOne', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/frames/wild/frame_wild_01.svg'
    };
}]);

angular.module('app').directive('wildTwo', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/frames/wild/frame_wild_02.svg'
    };
}]);

angular.module('app').directive('wildThree', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/frames/wild/frame_wild_03.svg'
    };
}]);

angular.module('app').directive('wildFour', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/frames/wild/frame_wild_04.svg'
    };
}]);

angular.module('app').directive('wildFive', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/frames/wild/frame_wild_05.svg'
    };
}]);
