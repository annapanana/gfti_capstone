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
      var filters = require('./postcard_settings/filters.js');
      var themes = require('./postcard_settings/themes.js');
      vm.filters = filters;
      vm.themes = themes;

      vm.$onInit = function() {
        vm.composition_settings = JSON.parse(localStorage.getItem('composition_settings'));
        vm.postcardBackground = $sce.trustAsResourceUrl(vm.composition_settings.image_url);
        vm.curTheme = vm.themes[vm.composition_settings.theme_id].path;
        vm.curFilter = vm.filters[vm.composition_settings.color_id].name;
      };

      vm.selectColor = function(color_id) {
        console.log('selected color', color_id);
        vm.composition_settings.color_id = color_id;
        vm.curFilter = vm.filters[color_id].name;
        // Refresh image to reflect current filter
        let curImage = vm.composition_settings.image_url + '?' + new Date().getTime();
        vm.postcardBackground = $sce.trustAsResourceUrl(curImage);
        // TODO: Center selected item on carousel
      };

      vm.selectTheme = function(theme_id) {
        console.log('selected theme', theme_id);
        vm.composition_settings.theme_id = theme_id;
        vm.curTheme = vm.themes[theme_id].path;
        // TODO: Center selected item on carousel
      };

      vm.nextStep = function() {
        localStorage.setItem('composition_settings', JSON.stringify(vm.composition_settings));
        $state.go('messageComposition');
      };
    }
}());
