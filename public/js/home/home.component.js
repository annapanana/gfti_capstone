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
      // vm.image_preview = "http://placehold.it/400x300";

      vm.fileInput = function(event) {
        let files = event.target.files;
        if (!files) {
          console.error("you must include an image");
        } else {
          getSignedUrl(files[0]);
        }
      };

      function getSignedUrl(file) {
        let fileData = {
          file_name: file.name,
          file_type:file.type
        };
        $http.post('/photobucket', fileData).then((result) => {
          console.log(result.data);
          // vm.image_preview = result.data.url;
          // console.log(vm.image_preview);
          uploadFile(file, result.data.signedRequest, result.data.url)
        });
      }

      function uploadFile(file, signedRequest, url) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
          if(xhr.readyState === 4){
            if(xhr.status === 200){
              console.log("UPDATE ULR HERE");
              compositionSettings.image_url = url;
            }
            else{
              alert('Could not upload file.');
            }
          }
        };
        xhr.send(file);
      }

      vm.submitCard = function() {
        let newPostcard = {
          settings: compositionSettings,
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
          message: vm.message
        };

        $http.post('/postcards', newPostcard).then((result) => {
          console.log(result);
          vm.postcard_preview = result.data[0].postcard;
          console.log(vm.postcard_preview);
        });
      };

      //TODO build this up and store in local storage until user pays and submits
      var compositionSettings = {
        template_id: 1,
        color_id: 1,
        theme_id: 1,
        greetings_subtext: 'Greetings from Denver!',
        // add image link from S3
        image_url: ''
      };
    }
}());
