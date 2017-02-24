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
      vm.composition_settings = {};
      vm.$onInit = function() {
        vm.composition_settings = JSON.parse(localStorage.getItem('composition_settings'));
      };

      vm.selectTheme = function(theme) {
        vm.composition_settings.theme_id = theme;
        localStorage.setItem('composition_settings', JSON.stringify(vm.composition_settings));
        $state.go('photoUpload');
      };
    }
}());
