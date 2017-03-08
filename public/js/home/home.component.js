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
            font_id: 1,
            color_id: 1,
            font_size: 24,
            image_scale: 1,
            image_pos_x: 0,
            image_pos_y: 0,
            text_pos: 0,
            greetings_subtext: 'greetings from the internet',
            image_url: 'https://s3-us-west-2.amazonaws.com/gftiresources/assets/placeholder_img.png',
            color_hex: "#F4987A",
            font_family: 'Day Poster',
            filter_name: '#noFilter'
          },
          message: 'this is a message',
          to: {
            name: 'Muffin Man',
            address_line1: '123 Bluebery Lane',
            address_line2: '',
            address_city: 'Sunnyville',
            address_state: 'CO',
            address_zip: '80304'
          },
          from: {
            name: 'Mary Westmacott',
            address_line1: '3336 Liberty Avenue',
            address_line2: 'Hickory Hills',
            address_city: 'Pomona',
            address_state: 'CA',
            address_zip: '91766'
          }
        };
        localStorage.setItem('postcard', JSON.stringify(postcard));
        // $(".card-preview").flip({autoSize: true});
        angular.element(".card-preview").flip({
          trigger: 'hover',
          autoSize: true
        });
        // $(".card-preview").flip({
        //   trigger: 'hover',
        //   autoSize: true
        // });

        selectRandomWallpaper();
      };

      vm.flip = function() {
        $(".card-preview").flip();
      };

      vm.openh1 = false;
      vm.openh2 = false;
      vm.openh3 = false;

      vm.imageSets = [1, 1, 1, 3];
      vm.updateImage = function(image_num) {
        vm.imageSets[image_num]+=1;
        if (vm.imageSets[image_num] > 3) {
          vm.imageSets[image_num] = 1;
        }
      };

      vm.wallpaper = 1;
      function selectRandomWallpaper() {
        vm.wallpaper = Math.floor(Math.random() * 3);
      }
    }
}());
