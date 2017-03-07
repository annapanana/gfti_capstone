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
      vm.currentTab = 'message';
      vm.curStep = 4;
      vm.hoverStep = 0;
      vm.nextStep = false;
      vm.buttonHover = false;
      vm.disabled = true;

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
        if (postcardService.validateBack()) {
          vm.disabled = false;
        } else {
          vm.disabled = true;
        }
      };

      vm.changeTab = function(tab) {
        vm.currentTab = tab;
      };

      vm.checkIfValidData = function() {
        postcardService.setAddressedFrom(vm.from);
        postcardService.setAddressedTo(vm.to);
        postcardService.setMessage(vm.message);
        if (postcardService.validateBack()) {
          vm.disabled = false;
        } else {
          vm.disabled = true;
        }
      };

      vm.next = function() {

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
        $state.go('payment', null, { reload: true });
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
