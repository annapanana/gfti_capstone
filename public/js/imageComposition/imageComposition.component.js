'use strict';
(function() {
  angular.module('app')
    .component('imageComposition', {
      templateUrl: 'js/imageComposition/imageComposition.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$sce"];
    function controller($http, $state, stateParams, $sce) {
      const vm = this;
      vm.composition_settings = {};

      vm.$onInit = function() {
        vm.composition_settings = JSON.parse(localStorage.getItem('composition_settings'));
        console.log(vm.composition_settings.image_url);
        vm.postcardBackground = $sce.trustAsResourceUrl(vm.composition_settings.image_url);

      };

      vm.selectColor = function(color_id) {
        console.log('selected color', color_id);
        vm.composition_settings.color_id = color_id;
        // TODO: Center selected item on carousel
        // TODO: Update postcard layout
      };

      vm.selectTheme = function(theme_id) {
        console.log('selected theme', theme_id);
        vm.composition_settings.theme_id = theme_id;
        // TODO: Center selected item on carousel
        // TODO: Update postcard layou
      };
    }
}());
