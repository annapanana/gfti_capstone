'use strict';
(function() {
  angular.module('app')
    .component('messageComposition', {
      templateUrl: 'js/messageComposition/messageComposition.template.html',
      controller: controller,
      binding: {
        themeData: '<',
        filterData: '<'
      }
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$sce"];
    function controller($http, $state, stateParams, $sce) {
      const vm = this;
      vm.themes = themeData;
      vm.filters = filterData;

      vm.$onInit = function() {
        vm.composition_settings = JSON.parse(localStorage.getItem('composition_settings'));
        console.log(vm.composition_settings);
        vm.postcardBackground = $sce.trustAsResourceUrl(vm.composition_settings.image_url);
        vm.curTheme = themeSVG[vm.themes[vm.composition_settings.theme_id].path_id];
        vm.curFilter = vm.filters[vm.composition_settings.color_id].name;
      };
    }
}());
