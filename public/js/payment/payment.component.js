'use strict';
(function() {
  angular.module('app')
    .component('payment', {
      templateUrl: 'js/payment/payment.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, stateParams) {
      const vm = this;
      var postcard = {};
      vm.payment_info = {};

      vm.$onInit = function() {
        postcard = JSON.parse(localStorage.getItem('postcard'));
        // TODO Load postcard preview settings
        vm.payment_info = postcard.payment_info;
      };

      vm.submitCard = function() {
        postcard.payment_info = vm.payment_info;
        // Set draw path for html template
        postcard.theme_path = themeData[postcard.composition_settings.theme_id].path_data;
        $http.post('/postcards', postcard).then((result) => {
          console.log("result", result.data[0]);
          // TODO Debug displaying image previews
        });
      };
    }
}());
