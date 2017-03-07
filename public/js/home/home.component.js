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
            color_id: 2,
            font_size: 24,
            image_scale: 1,
            image_pos_x: 0,
            image_pos_y: 0,
            text_pos: 0,
            greetings_subtext: 'greetings from the internet',
            image_url: 'https://s3-us-west-2.amazonaws.com/gftiresources/assets/placeholder_img.png'
          },
          frame_url: "classic-1",
          color_hex: "#F4987A",
          message: 'this is a message',
          font_family: 'Day Poster',
          font_size: 24,
          filter_name: '#noFilter',
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
        // TODO select a wallpaper to disply
        vm.wallpaper = Math.floor(Math.random() * 3);
        console.log(vm.wallpaper);
      }
    }
}());
