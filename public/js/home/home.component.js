'use strict';
(function() {
  angular.module('app')
    .component('home', {
      templateUrl: 'js/home/home.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$scope"];
    function controller($http, $state, $stateParams, $scope) {
      const vm = this;
      vm.$onInit = function() {
        let composition_settings = {
          template_name: 'template_01.html',
          color_id: 1,
          theme_id: 1,
          greetings_subtext: 'greetings from the internet',
          image_url: 'http://placehold.it/400x300'
        };
        localStorage.setItem('composition_settings', JSON.stringify(composition_settings));
      };
    }
}());
