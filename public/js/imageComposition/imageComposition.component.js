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


      vm.$onInit = function() {
        postcard = JSON.parse(localStorage.getItem('postcard'));
        vm.composition_settings = postcard.composition_settings;
        vm.filters = filterData;
        vm.frames = themeData[vm.composition_settings.theme_id];
        vm.postcardBackground = $sce.trustAsResourceUrl(vm.composition_settings.image_url);
        vm.curTheme = themeData[vm.composition_settings.theme_id][1].frame;
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
        console.log(frame_id);
        vm.curTheme = themeData[vm.composition_settings.theme_id][frame_id].frame;
        // TODO: Center selected item on carousel
      };

      vm.nextStep = function() {
        console.log(vm.composition_settings);
        postcard.composition_settings = vm.composition_settings;
        localStorage.setItem('postcard', JSON.stringify(postcard));
        $state.go('messageComposition');
      };
    }
}());
