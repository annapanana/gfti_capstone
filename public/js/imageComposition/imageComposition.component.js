'use strict';
(function() {
  angular.module('app')
    .component('imageComposition', {
      templateUrl: 'js/imageComposition/imageComposition.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$sce", "$scope"];
    function controller($http, $state, stateParams, $sce, $scope) {
      const vm = this;
      var postcard = {};
      var frameUrl = "";

      vm.$onInit = function() {
        postcard = JSON.parse(localStorage.getItem('postcard'));
        vm.composition_settings = postcard.composition_settings;
        vm.filters = filterData; // set for UI widget
        vm.frames = themeData[vm.composition_settings.theme_id]; // set for UI widget
        vm.postcardBackground = $sce.trustAsResourceUrl(vm.composition_settings.image_url);
        vm.curTheme = $sce.trustAsResourceUrl(themeData[vm.composition_settings.theme_id][1].frame);
        frameUrl = themeData[vm.composition_settings.theme_id][1].frame;
        vm.curFilter = filterData[vm.composition_settings.filter_id].name;
      };

      vm.selectColor = function(filter_id) {
        vm.composition_settings.filter_id = filter_id;
        vm.curFilter = filterData[filter_id].name;
        // Refresh image to reflect current filter
        let curImage = vm.composition_settings.image_url + '?' + new Date().getTime();
        vm.postcardBackground = $sce.trustAsResourceUrl(curImage);
        // TODO: Center selected item on carousel
      };

      vm.selectFrame = function(frame_id) {
        vm.composition_settings.frame_id = frame_id;
        frameUrl =  themeData[vm.composition_settings.theme_id][frame_id].frame;
        vm.curTheme = $sce.trustAsResourceUrl(frameUrl);
        // TODO: Center selected item on carousel
      };

      vm.nextStep = function() {
        postcard.frame_url = frameUrl; // set frame url link for Lob parsing
        postcard.composition_settings = vm.composition_settings;
        localStorage.setItem('postcard', JSON.stringify(postcard));
        $state.go('messageComposition');
      };
    }
}());
