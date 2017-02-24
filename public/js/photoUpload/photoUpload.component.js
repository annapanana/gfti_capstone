'use strict';
(function() {
  angular.module('app')
    .component('photoUpload', {
      templateUrl: 'js/photoUpload/photoUpload.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$scope"];
    function controller($http, $state, stateParams, $scope) {
      const vm = this;
      vm.composition_settings = {};
      var postcard = {};
      vm.$onInit = function() {
        postcard = JSON.parse(localStorage.getItem('postcard'));
        vm.composition_settings = postcard.composition_settings;
      };

      vm.nextStep = function() {
        postcard.composition_settings = vm.composition_settings;
        localStorage.setItem('postcard', JSON.stringify(postcard));
        $state.go('imageComposition');
      };

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
          // console.log(result.data);
          uploadFile(file, result.data.signedRequest, result.data.url);
        });
      }

      function uploadFile(file, signedRequest, url) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
          if(xhr.readyState === 4){
            if(xhr.status === 200){
              vm.composition_settings.image_url = url;
              // console.log("image:",   vm.compositionSettings.image_url);
              $scope.$apply();
            }
            else{
              alert('Could not upload file.');
            }
          }
        };
        xhr.send(file);
      }
    }
}());
