'use strict';
(function() {
  angular.module('app')
    .component('messageComposition', {
      templateUrl: 'js/messageComposition/messageComposition.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$sce"];
    function controller($http, $state, stateParams, $sce) {
      const vm = this;

      vm.$onInit = function() {
        vm.composition_settings = JSON.parse(localStorage.getItem('composition_settings'));
        vm.postcardBackground = $sce.trustAsResourceUrl(vm.composition_settings.image_url);
        vm.curTheme = vm.themes[vm.composition_settings.theme_id].path;
        vm.curFilter = vm.filters[vm.composition_settings.color_id].name;
      };
    }
}());
