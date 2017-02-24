'use strict';
(function() {
  angular.module('app')
    .component('imageComposition', {
      templateUrl: 'js/imageComposition/imageComposition.template.html',
      controller: controller,
      binding: {
        themeData: '<',
        filterData: '<'
      }
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$sce", "$scope"];
    function controller($http, $state, stateParams, $sce, $scope) {
      const vm = this;
      vm.themes = themeData;
      vm.filters = filterData;

      vm.$onInit = function() {
        vm.composition_settings = JSON.parse(localStorage.getItem('composition_settings'));
        vm.postcardBackground = $sce.trustAsResourceUrl(vm.composition_settings.image_url);
        vm.curTheme = themeSVG[vm.themes[vm.composition_settings.theme_id].path_id];
        vm.curFilter = vm.filters[vm.composition_settings.color_id].name;
      };

      vm.selectColor = function(color_id) {
        vm.composition_settings.color_id = color_id;
        vm.curFilter = vm.filters[color_id-1].name; //-1 accounts for non-zero db value
        // Refresh image to reflect current filter
        let curImage = vm.composition_settings.image_url + '?' + new Date().getTime();
        vm.postcardBackground = $sce.trustAsResourceUrl(curImage);
        // TODO: Center selected item on carousel
      };

      vm.selectTheme = function(theme_id) {
        vm.composition_settings.theme_id = theme_id;
        vm.curTheme = themeSVG[vm.themes[theme_id-1].path_id]; //-1 accounts for non-zero db value
        // TODO: Center selected item on carousel
      };

      vm.nextStep = function() {
        localStorage.setItem('composition_settings', JSON.stringify(vm.composition_settings));
        $state.go('messageComposition');
      };
    }
}());
