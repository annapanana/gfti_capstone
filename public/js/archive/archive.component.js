'use strict';
(function() {
  angular.module('app')
    .component('archive', {
      templateUrl: 'js/archive/archive.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, stateParams) {
      const vm = this;
      vm.archive = [];

      vm.$onInit = function() {
        $http.get('/postcards').then((result) => {
          for (var i = 0; i < result.data.length; i++) {
            console.log(result.data[i]);
            if (result.data[i].is_saved) {
              vm.archive.push(result.data[i]);
            }
          }
        });
      };
    }
}());
