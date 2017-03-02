'use strict';
(function() {
  angular.module('app')
    .component('themeSelection', {
      templateUrl: 'js/themeSelection/themeSelection.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, stateParams) {
      const vm = this;
      var postcard = {};
      vm.composition_settings = {};

      vm.$onInit = function() {
        postcard = JSON.parse(localStorage.getItem('postcard'));
        vm.composition_settings = postcard.composition_settings;
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
