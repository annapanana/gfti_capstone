'use strict';
angular.module('app').directive('suitcaseClassicOpen', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/objects/suitcase_classic_open.svg'
    };
}]);

angular.module('app').directive('suitcaseClassicClosed', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/objects/suitcase_classic_closed.svg'
    };
}]);

angular.module('app').directive('suitcaseModernOpen', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/objects/suitcase_modern_open.svg'
    };
}]);

angular.module('app').directive('suitcaseModernClosed', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/objects/suitcase_modern_closed.svg'
    };
}]);

angular.module('app').directive('suitcasePlayfulOpen', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/objects/suitcase_playful_open.svg'
    };
}]);

angular.module('app').directive('suitcasePlayfulClosed', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/objects/suitcase_playful_closed.svg'
    };
}]);

angular.module('app').directive('suitcaseWildOpen', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/objects/suitcase_wild_open.svg'
    };
}]);

angular.module('app').directive('suitcaseWildClosed', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'assets/objects/suitcase_wild_closed.svg'
    };
}]);
