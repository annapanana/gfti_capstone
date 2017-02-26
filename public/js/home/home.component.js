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
        let postcard = {
          composition_settings: {
            template_name: 'template_01.html',
            filter_id: 1,
            theme_id: 1,
            frame_id: 1,
            color_id: 1,
            greetings_subtext: 'greetings from the internet',
            image_url: 'https://s3-us-west-2.amazonaws.com/gftiresources/tester.jpg'
          },
          frame_url: "https://s3-us-west-2.amazonaws.com/gftiresources/assets/frames/playful/frame_playful_06.svg",
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
          }
        };
        localStorage.setItem('postcard', JSON.stringify(postcard));
      };
    }
}());
