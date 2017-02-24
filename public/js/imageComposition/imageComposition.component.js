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
        vm.postcardBackground = $sce.trustAsResourceUrl(vm.composition_settings.image_url);
        vm.curTheme = themes[vm.composition_settings.theme_id];
        vm.curFilter = filters[vm.composition_settings.color_id];
      };

      vm.selectColor = function(color_id) {
        console.log('selected color', color_id);
        vm.composition_settings.color_id = color_id;
        vm.curFilter = filters[color_id];
        // Refresh image to reflect current filter
        let curImage = vm.composition_settings.image_url + '?' + new Date().getTime();
        vm.postcardBackground = $sce.trustAsResourceUrl(curImage);
        // TODO: Center selected item on carousel
      };

      vm.selectTheme = function(theme_id) {
        console.log('selected theme', theme_id);
        vm.composition_settings.theme_id = theme_id;
        vm.curTheme = themes[theme_id];
        // TODO: Center selected item on carousel
        console.log(vm.composition_settings.greetings_subtext);
      };

      var themes = {
        0: "M422.67,0H0V306H450V0ZM421,280,225,268.71,29,280,17.3,153,29,26,225,37.29,421,26l11.7,127Z",
        1: "M422.67,0H0V306H450V0ZM421,280l-196,8.71L29,280l8.3-127L29,26l196-8.71L421,26l-8.3,127Z"
      };

      var filters = {
        1: "#pictureFilter"
      }
    };
}());
