'use strict';
angular.module('app').directive('classicTheme', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'js/themeSelection/classic_button.svg'
    };
}]);

'use strict';
angular.module('app').directive('playfulTheme', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'js/themeSelection/playful_button.svg'
    };
}]);

'use strict';
angular.module('app').directive('modernTheme', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'js/themeSelection/modern_button.svg'
    };
}]);

'use strict';
angular.module('app').directive('wildTheme', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'js/themeSelection/wild_button.svg'
    };
}]);
