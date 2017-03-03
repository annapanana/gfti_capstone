'use strict';
(function() {
  angular.module('app')
    .component('archive', {
      templateUrl: 'js/archive/archive.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "postcardService"];
    function controller($http, $state, stateParams, postcardService) {
      const vm = this;
      vm.archive = [];
      vm.filterBy = "None";

      vm.$onInit = function() {
        $http.get('/postcards').then((result) => {
          for (var i = 0; i < result.data.length; i++) {
            if (result.data[i].is_saved) {
              vm.archive.push(result.data[i]);
            }
          }
        });
      };

      vm.selectTemplate = function(id) {

        $http.get(`/postcards/${id}`).then((result) => {
          console.log(result.data);
          postcardService.updatePostcardObject(result.data);
          postcardService.savePostcardData();
          console.log("DONE");
          $state.go('imageComposition');
        });

      };
    }
}());
