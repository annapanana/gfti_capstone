'use strict';
(function() {
  angular.module('app')
    .component('themeSelection', {
      templateUrl: 'js/themeSelection/themeSelection.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$timeout"];
    function controller($http, $state, $stateParams, $timeout) {
      const vm = this;
      vm.curStep = 1;
      vm.hoverStep = 0;

      vm.suitcases = ["closed", "closed", "closed", "closed"];


      vm.toggleSuitcase = function(suitcase, state) {
        vm.suitcases[suitcase] = state;
      };

      vm.setHoverStep = function(step) {
        vm.hoverStep = step;
      };

      var postcard = {};
      vm.composition_settings = {};

      vm.$onInit = function() {
        postcard = JSON.parse(localStorage.getItem('postcard'));
        vm.composition_settings = postcard.composition_settings;
        // console.log($stateParams);
      };

      vm.selectTheme = function(theme) {
        vm.composition_settings.theme_id = theme;
        postcard.composition_settings = vm.composition_settings;
        localStorage.setItem('postcard', JSON.stringify(postcard));
        $state.go('photoUpload');
      };

      vm.hoverObject = "";
      vm.setHoverObject = function(obj) {
        vm.hoverObject = obj;
      };
    }
}());
