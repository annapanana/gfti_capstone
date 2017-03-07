'use strict';
(function() {
  angular.module('app')
    .component('app', {
      templateUrl: 'js/app/app.template.html',
      controller: controller
    });

    controller.$inject = ['$state']
    function controller($state) {
      const vm = this;
      vm.curState = $state.$current.name;

      vm.navTo = function(state) {
        $state.go(state, null, { reload: true })
      };
    }
}());
