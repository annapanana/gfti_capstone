'use strict';
(function() {
  angular.module('app')
    .component('payment', {
      templateUrl: 'js/payment/payment.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$timeout"];
    function controller($http, $state, $stateParams, $timeout) {
      const vm = this;
      var postcard = {};
      vm.payment_info = {};
      vm.imagePreview = "http://placehold.it/350x150";

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

          $timeout(function() {
            postcard.thumbnail = result.data[0].postcard.thumbnails[0].large;
            postcard.deliveryDate = result.data[0].postcard.expected_delivery_date;
            postcard.id = result.data[0].id;
            localStorage.setItem('postcard', JSON.stringify(postcard));
            $state.go('postcardSent');
          }, 5000);
        });
      };
    }
}());
