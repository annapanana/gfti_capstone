'use strict';
(function() {
  angular.module('app')
    .component('messageComposition', {
      templateUrl: 'js/messageComposition/messageComposition.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$sce", "postcardService"];
    function controller($http, $state, stateParams, $sce, postcardService) {
      const vm = this;
      vm.postcard = {
        frame: postcardService.updateFrameUrl($sce),
        filter: postcardService.getFilter(),
        color: postcardService.getColor(),
        subtext: postcardService.getSubtext(),
        background: postcardService.getBackgroundImage($sce)
      };

      vm.$onInit = function() {
        vm.to = postcardService.getAddressedTo();
        vm.from = postcardService.getAddressedFrom();
        vm.message = postcardService.getMessage();
      };

      vm.nextStep = function() {

        // Is the state entered correctly?
        if (!checkStateCode(vm.to.address_state)) {
          console.error("The state in your to address is not valid");
        } else if (!checkStateCode(vm.from.address_state)) {
          console.error("The state in your from address is not valid");
        }
        postcardService.setAddressedTo(vm.to);

        // Is the zip code entered correctly?
        if (!checkZipcode(vm.from.address_zip)) {
          console.error("The zipcode in your to address is not valid");
        } else if (!checkZipcode(vm.from.address_zip)) {
          console.error("The zipcode in your from address is not valid");
        }
        postcardService.setAddressedFrom(vm.from);

        if (vm.message.length < 1) {
          console.error("You must include a message");
        }
        postcardService.setMessage(vm.message);

        postcardService.savePostcardData();
        $state.go('payment');
      };

      function checkZipcode(zip) {
        let nums = parseInt(zip);
        if (typeof nums !== "number") {
          return false;
        }
        if (zip.length !== 5) {
          return false;
        }
        return true;
      }

      function checkStateCode(state) {
        if (state.match(/^(A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[ANU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/)) {
          return true;
        } else {
          return false;
        }
      }
    }
}());
