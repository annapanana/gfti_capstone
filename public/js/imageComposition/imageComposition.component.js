'use strict';
(function() {
  angular.module('app')
    .component('imageComposition', {
      templateUrl: 'js/imageComposition/imageComposition.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$sce", "$scope", "postcardService"];
    function controller($http, $state, stateParams, $sce, $scope, postcardService) {
      const vm = this;

      vm.$onInit = function() {
        vm.filters = postcardService.getFilterData();
        vm.frames = postcardService.getFrameData();
        vm.colors = postcardService.getColorData();

        vm.postcard = {
          frame: postcardService.updateFrameUrl($sce),
          filter: postcardService.getFilter(),
          color: postcardService.getColor(),
          subtext: postcardService.getSubtext(),
          background: postcardService.getBackgroundImage($sce)
        };
      };

      vm.selectFilter = function(filter_id) {
        postcardService.setFilter(filter_id);
        vm.postcard.filter = postcardService.getFilter();
        vm.postcard.background = postcardService.refreshBackgroundImage($sce);
      };

      vm.selectFrame = function(frame_id) {
        postcardService.setFrame(frame_id);
        vm.postcard.frame = postcardService.updateFrameUrl($sce);
      };

      vm.selectColor = function(color_id) {
        postcardService.setColor(color_id);
        vm.postcard.color = postcardService.getColor();
        vm.postcard.frame = postcardService.updateFrameUrl($sce);
      };

      vm.nextStep = function() {
        postcardService.setSubtext(vm.postcard.subtext);
        postcardService.savePostcardData();
        $state.go('messageComposition');
      };
    }
}());
