'use strict';
(function() {
  angular.module('app')
    .component('messageComposition', {
      templateUrl: 'js/messageComposition/messageComposition.template.html',
      controller: controller,
      binding: {
        themeData: '<',
        filterData: '<'
      }
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$sce"];
    function controller($http, $state, stateParams, $sce) {
      const vm = this;
      var postcard = {};

      vm.$onInit = function() {
        postcard = JSON.parse(localStorage.getItem('postcard'));
        vm.composition_settings = postcard.composition_settings;
        console.log(vm.composition_settings);
        vm.postcardBackground = $sce.trustAsResourceUrl(vm.composition_settings.image_url);
        vm.curTheme = themeData[vm.composition_settings.theme_id].path_data;
        vm.curFilter = filterData[vm.composition_settings.filter_id].name;
        vm.to = postcard.to;
        vm.from = postcard.from;
        vm.message = postcard.message;
      };

      vm.nextStep = function() {

        // Is the state entered correctly?
        if (!checkStateCode(vm.to.address_state)) {
          console.error("The state in your to address is not valid");
        } else if (!checkStateCode(vm.from.address_state)) {
          console.error("The state in your from address is not valid");
        }
        postcard.to = vm.to;

        // Is the zip code entered correctly?
        if (!checkZipcode(vm.from.address_zip)) {
          console.error("The zipcode in your to address is not valid");
        } else if (!checkZipcode(vm.from.address_zip)) {
          console.error("The zipcode in your from address is not valid");
        }
        postcard.from = vm.from;

        if (vm.message.length < 1) {
          console.error("You must include a message");
        }

        postcard.message = vm.message;

        localStorage.setItem('postcard', JSON.stringify(postcard));
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
