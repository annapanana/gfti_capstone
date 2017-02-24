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
      var composition_settings = {};
      vm.$onInit = function() {
        composition_settings = JSON.parse(localStorage.getItem('composition_settings'));
      };

      vm.submitCard = function() {
        let newPostcard = {
          settings: vm.composition_settings,
          // to: vm.to,
          to: {
            name: 'anna',
            address_line1: '1260 kalmia ave',
            address_line2: 'apartment 17',
            address_city: 'Boulder',
            address_state: 'CO',
            address_zip: '80304'
          },
          // from: vm.from,
          from: {
            name: 'anna',
            address_line1: '1260 kalmia ave',
            address_line2: 'apartment 17',
            address_city: 'Boulder',
            address_state: 'CO',
            address_zip: '80304'
          },
          message: vm.message,
          // payment_info: vm.payment_info
          payment_info: {
            object: "card",
            number: "4242 4242 4242 4242",
            exp_month: 10,
            exp_year: 2018,
            email: "annaklotko@gmail.com"
          }
        };
        $http.post('/postcards', newPostcard).then((result) => {
          console.log("result", result.data[0]);
          // TODO Debug displaying image previews

        });
      };
    }
}());
