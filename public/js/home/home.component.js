'use strict';
(function() {
  angular.module('app')
    .component('home', {
      templateUrl: 'js/home/home.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$scope", "$sce", "$timeout"];
    function controller($http, $state, $stateParams, $scope, $sce, $timeout) {
      const vm = this;
      vm.$onInit = function() {
        let postcard = {
          composition_settings: {
            template_name: 'classic/classic_01.html',
            filter_id: 1,
            theme_id: 1,
            frame_id: 1,
            color_id: 1,
            greetings_subtext: 'greetings from the internet',
            image_url: 'https://s3-us-west-2.amazonaws.com/gftiresources/tester.jpg'
          },
          frame_url: "classic-1",
          color_hex: "#F4987A",
          message: 'this is a message',
          to: {
            name: 'anna',
            address_line1: '1260 kalmia ave',
            address_line2: 'apartment 17',
            address_city: 'Boulder',
            address_state: 'CO',
            address_zip: '80304'
          },
          from: {
            name: 'anna',
            address_line1: '1260 kalmia ave',
            address_line2: 'apartment 17',
            address_city: 'Boulder',
            address_state: 'CO',
            address_zip: '80304'
          },
          payment_info: {
            object: "card",
            number: "4242 4242 4242 4242",
            exp_month: 10,
            exp_year: 2018,
            email: "annaklotko@gmail.com"
          },
        };
        localStorage.setItem('postcard', JSON.stringify(postcard));
        $("#card").flip();
        updateHoverObject();
      };

      vm.flip = function() {
        $("#card").flip();
      };

      vm.hoverObject = "";
      vm.setHoverObject = function(obj) {
        console.log(obj);
        vm.hoverObject = obj;
      };

      let destinations = ['sydney', 'peru', 'paris', 'japan', 'istanbul', 'india', 'hawaii', 'colorado', 'berlin', 'south africa', 'outer space', 'morocco'];
      let index = 0;

      function updateHoverObject() {
        vm.hoverObject = destinations[index];
        index++;
        if (index > destinations.length - 1) {
          index = 0;
        }
        $timeout(updateHoverObject, 2000);
      };
    }
}());
