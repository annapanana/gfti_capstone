'use strict';
(function() {
  angular.module('app')
    .component('photoUpload', {
      templateUrl: 'js/photoUpload/photoUpload.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$scope", "$sce", "postcardService"];
    function controller($http, $state, stateParams, $scope, $sce, postcardService) {
      const vm = this;
      vm.postcard = {
        background: postcardService.getBackgroundImage($sce)
      };

      vm.nextStep = function() {
        postcardService.savePostcardData();
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
              postcardService.setBackgroundImage(url);
              vm.postcard.background = postcardService.getBackgroundImage($sce);
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
