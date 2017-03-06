'use strict';
(function() {
  angular.module('app')
    .component('app', {
      templateUrl: 'js/app/app.template.html',
      controller: controller
    });

    function controller() {
      const vm = this;
      vm.$onInit = function() {
        Dropzone.autoDiscover = false;
      }
    }
}());
