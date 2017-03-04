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
      vm.filterBy = undefined;
      vm.filterName = "All";
      vm.sortCriteria = "Popularity";

      vm.$onInit = function() {
        $http.get('/postcards').then((result) => {
          for (var i = 0; i < result.data.length; i++) {
            if (result.data[i].is_saved) {
              console.log(result.data[i].theme_id);
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

      vm.updateSortCriteria = function(criteria) {
        vm.sortCriteria = criteria;
      };

      let themes = ["All", "Classic", "Playful", "Modern", "Wild"];
      vm.updateFilterCriteria = function(criteria) {
        vm.filterName = criteria;
        if (criteria === "All") {
          vm.filterBy = undefined;
        } else {
          vm.filterBy = themes.indexOf(criteria);
        }
      };
    }
}());
