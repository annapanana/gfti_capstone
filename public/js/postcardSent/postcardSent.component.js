'use strict';
(function() {
  angular.module('app')
    .component('postcardSent', {
      templateUrl: 'js/postcardSent/postcardSent.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state"];
    function controller($http, $state) {
      const vm = this;
      var postcard = {};
      vm.cardName = "";
      vm.cardNotes = "";

      vm.$onInit = function() {
        postcard = JSON.parse(localStorage.getItem('postcard'));
        vm.deliveryDate = postcard.deliveryDate;
        vm.thumbnailFront = postcard.thumbnail;
      };

      vm.saveDesign = function(){
        postcard.card_name = vm.cardName;
        postcard.card_notes = vm.designNotes;
        $http.patch(`/postcards/${postcard.id}`, postcard).then(() => {
          $state.go('archive');
        });
      };
    }
}());
