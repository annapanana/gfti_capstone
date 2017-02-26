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
        vm.postcardBackground = postcardService.getBackgroundImage($sce);
        // TODO change theme to frame
        vm.curTheme = postcardService.getDefaultFrame($sce);
        vm.curFilter = postcardService.getDefaultFilter();
        vm.curColor = postcardService.getDefaultColor();
        vm.greetingsSubtext = postcardService.getSubtext();
      };

      vm.selectFilter = function(filter_id) {
        postcardService.setFilter(filter_id);
        vm.curFilter = postcardService.getFilter();
        vm.postcardBackground = postcardService.refreshBackgroundImage($sce);
      };

      vm.selectFrame = function(frame_id) {
        postcardService.setFrame(frame_id);
        vm.curTheme = postcardService.updateFrameUrl($sce);
      };

      vm.selectColor = function(color_id) {
        postcardService.setColor(color_id);
        vm.curColor = postcardService.getCurrentColor();
        vm.curTheme = postcardService.updateFrameUrl($sce);
      };

      vm.nextStep = function() {
        postcardService.savePostcardData();
        $state.go('messageComposition');
      };
    }
}());
