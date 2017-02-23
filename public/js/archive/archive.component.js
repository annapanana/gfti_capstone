'use strict';
(function() {
  angular.module('app')
    .component('archive', {
      templateUrl: 'js/archive/archive.template.html',
      controller: controller
    })

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, stateParams) {
      const vm = this;
    }
}());
