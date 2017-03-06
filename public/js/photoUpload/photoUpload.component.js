'use strict';
(function() {
  angular.module('app')
    .component('photoUpload', {
      templateUrl: 'js/photoUpload/photoUpload.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$scope", "$sce", "postcardService", "$log"];
    function controller($http, $state, $stateParams, $scope, $sce, postcardService, $log) {
      const vm = this;
      vm.isLoading = false;
      vm.curStep = 2;
      vm.hoverStep = 0;
      vm.nextStep = false;
      vm.buttonHover = false;
      vm.disabled = true;
      vm.selectedImage = "";

      vm.setNextButton = function() {
        vm.nextStep = true;
      };

      vm.hoverNext = function(state) {
        if (!vm.disabled) {
          vm.buttonHover = state;
        }
      };

      vm.setHoverStep = function(step) {
        vm.hoverStep = step;
      };

      vm.postcard = {
        background: postcardService.getBackgroundImage($sce)
      };

      vm.next = function() {
        postcardService.savePostcardData();
        $state.go('imageComposition');
      };

      vm.$onInit = function() {

      };

      vm.fileInput = function(event) {
        let files = event.target.files;
        if (!files) {
          console.error("you must include an image");
        } else {
          getSignedUrl(files[0]);
          vm.isLoading = true;
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
              console.log("image:",  url);
              vm.isLoading = false;
              vm.disabled = false;
              $scope.$apply();
            }
            else{
              alert('Could not upload file.');
            }
          }
        };
        xhr.send(file);
      }

      vm.submitImageUrl = function() {
        // TODO Validate if this is an image
        postcardService.setBackgroundImage(vm.selectedImage);
        vm.postcard.background = postcardService.getBackgroundImage($sce);
        vm.disabled = false;
      };
    }
}());
