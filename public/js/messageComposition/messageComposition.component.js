'use strict';
(function() {
  angular.module('app')
    .component('messageComposition', {
      templateUrl: 'js/messageComposition/messageComposition.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, stateParams) {
      const vm = this;
      var composition_settings = {};
      vm.$onInit = function() {
        composition_settings = JSON.parse(localStorage.getItem('composition_settings'));
      };
    }
}());
