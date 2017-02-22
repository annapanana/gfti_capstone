'use strict';
(function() {
  angular.module('app')
    .component('home', {
      templateUrl: 'js/home/home.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"]
    function controller($http, $state, $stateParams) {
      const vm = this;
      vm.to = {};
      vm.from = {};
      vm.message = "";

      vm.submitCard = function() {
        let newPostcard = {
          settings: compositionSettings,
          to: vm.to,
          from: vm.from,
          message: vm.message
        };

        $http.post('/postcards', newPostcard).then((result) => {
          console.log(result);
        });
      };

      //TODO build this up and store in local storage until user pays and submits
      var compositionSettings = {
        template_id: 1,
        color_id: 1,
        theme_id: 1,
        greetings_subtext: 'Greetings from Denver!',
        // add image link from S3
        image_url: 'http://www.boulderco.com/uploads/slideshow/1354198589.jpg'
      };
    }
}());

// send_to = {
//   name: 'anna',
//   address_line1: '1260 kalmia ave',
//   address_line2: 'apartment 17',
//   address_city: 'Boulder',
//   address_state: 'CO',
//   address_zip: '80304'
// };
//
// send_from = {
//   name: 'anna',
//   address_line1: '1260 kalmia ave',
//   address_line2: 'apartment 17',
//   address_city: 'Boulder',
//   address_state: 'CO',
//   address_zip: '80304'
// };
