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
        vm.curTheme = themes[vm.composition_settings.theme_id];
        vm.curFilter = filters[vm.composition_settings.color_id];
      };

      vm.selectColor = function(color_id) {
        console.log('selected color', color_id);
        vm.composition_settings.color_id = color_id;
        vm.curFilter = filters[color_id];
        // Refresh Image
        let curImage = vm.composition_settings.image_url + '?' + new Date().getTime();
        vm.postcardBackground = $sce.trustAsResourceUrl(curImage);
        // TODO: Center selected item on carousel
      };

      vm.selectTheme = function(theme_id) {
        console.log('selected theme', theme_id);
        vm.composition_settings.theme_id = theme_id;
        vm.curFilter = themes[theme_id];
        // TODO: Center selected item on carousel
      };

      var themes = {
        1: "M422.67,0H0V306H450V0ZM421,280l-196,8.71L29,280l8.3-127L29,26l196-8.71L421,26l-8.3,127Z"
      };

      var filters = {
        1: "#pictureFilter"
      }
    };
}());
