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
      vm.curStep = 3;
      vm.hoverStep = 0;
      vm.nextStep = false;
      vm.buttonHover = false;

      vm.setNextButton = function() {
        vm.nextStep = true;
      };

      vm.hoverNext = function(state) {
        vm.buttonHover = state;
      };

      vm.setHoverStep = function(step) {
        vm.hoverStep = step;
      };

      vm.$onInit = function() {
        vm.filters = postcardService.getFilterData();
        vm.frames = postcardService.getFrameData();
        vm.colors = postcardService.getColorData();
        //TODO these should be set on init
        vm.curFilter = 1;
        vm.curFrame = 1;
        vm.curColor = 1;

        vm.postcard = {
          frame: postcardService.updateFrameUrl($sce),
          filter: postcardService.getFilter(),
          color: postcardService.getColor(),
          subtext: postcardService.getSubtext(),
          background: postcardService.getBackgroundImage($sce)
        };

        // $(".ui-widget").slick({
        //   focusOnSelect: true
        // });
      };

      vm.selectFilter = function(filter_id) {
        vm.curFilter = filter_id;
        postcardService.setFilter(filter_id);
        vm.postcard.filter = postcardService.getFilter();
        vm.postcard.background = postcardService.refreshBackgroundImage($sce);
      };

      vm.selectFrame = function(frame_id) {
        vm.curFrame = frame_id;
        postcardService.setFrame(frame_id);
        vm.postcard.frame = postcardService.updateFrameUrl($sce);
      };

      vm.selectColor = function(color_id) {
        vm.curColor = color_id;
        postcardService.setColor(color_id);
        vm.postcard.color = postcardService.getColor();
        vm.postcard.frame = postcardService.updateFrameUrl($sce);
      };

      vm.next = function() {
        postcardService.setSubtext(vm.postcard.subtext);
        postcardService.savePostcardData();
        $state.go('messageComposition');
      };
    }
}());
