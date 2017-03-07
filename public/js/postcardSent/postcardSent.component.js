'use strict';
(function() {
  angular.module('app')
    .component('postcardSent', {
      templateUrl: 'js/postcardSent/postcardSent.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "postcardService", "$sce"];
    function controller($http, $state, postcardService, $sce) {
      const vm = this;
      var postcard = {};
      vm.cardName = "";
      vm.cardNotes = "";
      var pdf_url = "";
      vm.delivery_date = "";
      var id = "";

      vm.$onInit = function() {
        id = JSON.parse(localStorage.getItem('order_id'));
        $http.get(`/postcards/orders/${id}`).then(function(result) {
          pdf_url = result.data.pdf_url;
          vm.delivery_date = result.data.delivery_date;
        });

        vm.postcard = {
          frame: postcardService.updateFrameUrl($sce),
          filter: postcardService.getFilter(),
          color: postcardService.getColor(),
          font: postcardService.getFont(),
          font_size: postcardService.getFontSize(),
          image_scale: postcardService.getImageScale(),
          image_x: postcardService.getImagePosX(),
          image_y: postcardService.getImagePosY(),
          subtext: postcardService.getSubtext(),
          text_pos: postcardService.getTextPos(),
          background: postcardService.getBackgroundImage($sce),
        };
      };

      vm.saveDesign = function(){
        postcard.card_name = vm.cardName;
        postcard.card_notes = vm.designNotes;
        postcard.is_saved = true;
        console.log(postcard, id);
        $http.patch(`/postcards/${id}`, postcard).then((result) => {
          console.log(result);
          $state.go('archive', null, { reload: true });
        });
      };

      vm.viewPreview = function() {
        var win = window.open(pdf_url, '_blank');
        win.focus();
      };
    }
}());
