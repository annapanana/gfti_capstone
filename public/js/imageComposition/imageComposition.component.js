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
      vm.disabled = false;

      vm.setNextButton = function() {
        vm.nextStep = true;
      };

      vm.hoverNext = function(state) {
        if (!vm.disabled) {
          vm.buttonHover = state;
        }
      };

      vm.setHoverStep = function(step) {
        vm.hoverStep = step;
      };

      vm.$onInit = function() {
        vm.filters = postcardService.getFilterData();
        vm.frames = postcardService.getFrameData();
        vm.colors = postcardService.getColorData();
        vm.fonts = postcardService.getFontData();

        vm.curFilter = 1;
        vm.curFrame = 1;
        vm.curColor = 1;
        vm.curFont = 1;

        vm.postcard = {
          frame: postcardService.updateFrameUrl($sce),
          filter: postcardService.getFilter(),
          color: postcardService.getColor(),
          subtext: postcardService.getSubtext(),
          font: postcardService.getFont(),
          font_size: postcardService.getFontSize(),
          image_scale: postcardService.getImageScale(),
          image_x: postcardService.getImagePosX(),
          image_y: postcardService.getImagePosY(),
          background: postcardService.getBackgroundImage($sce)
        };
        // $(".ui-widget").slick({
        //   focusOnSelect: true
        // });
      };

      vm.selectFilter = function(filter_id) {
        console.log(filter_id);
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

      vm.selectFont = function(font_id) {
        vm.curFont = font_id;
        postcardService.setFont(font_id);
        vm.postcard.font = postcardService.getFont();
        vm.postcard.font_size = postcardService.getFontSize();
        console.log(vm.postcard.font_size);
      };

      vm.next = function() {
        postcardService.setSubtext(vm.postcard.subtext);
        postcardService.savePostcardData();
        $state.go('messageComposition');
      };

      $scope.$on("slideEnded", function() {
        console.log("update settings");
         postcardService.setFontSize($scope.slider.value);
         postcardService.setImageScale($scope.imageScale.value);
         postcardService.setImagePosX($scope.imagePosX.value);
         postcardService.setImagePosY($scope.imagePosY.value);
         vm.postcard.font_size = postcardService.getFontSize();
         vm.postcard.image_scale = postcardService.getImageScale();
         vm.postcard.image_x = postcardService.getImagePosX();
         vm.postcard.image_y = postcardService.getImagePosY();
         $scope.$apply();
      });

      $scope.slider = {
        value: postcardService.getFontSize(),
        options: {
          floor: 12,
          ceil: 72,
          showTicks: true
        }
      };

      $scope.imageScale = {
        value: 1,
        options: {
          floor: 1,
          ceil: 5,
          showTicks: true
        }
      };

      $scope.imagePosX = {
        value: 0,
        options: {
          floor: -500,
          ceil: 500,
          showTicks: false
        }
      };

      $scope.imagePosY = {
        value: 0,
        options: {
          floor: -500,
          ceil: 500,
          showTicks: false
        }
      };
    }
}());
