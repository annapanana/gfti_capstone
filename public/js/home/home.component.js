'use strict';
(function() {
  angular.module('app')
    .component('home', {
      templateUrl: 'js/home/home.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$scope"];
    function controller($http, $state, $stateParams, $scope) {
      const vm = this;
      vm.$onInit = function() {
        localStorage.setItem('composition_settings', JSON.stringify({}));
      };
    }
}());
