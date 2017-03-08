'use strict';
(function() {
  angular.module('app')
    .component('payment', {
      templateUrl: 'js/payment/payment.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$timeout", "$sce", "postcardService", "$scope"];
    function controller($http, $state, $stateParams, $timeout, $sce, postcardService, $scope) {
      const vm = this;
      vm.curStep = 5;
      vm.hoverStep = 0;
      vm.nextStep = false;
      vm.buttonHover = false;
      vm.emailAddress = "";
      vm.emailInvalid = false;

      vm.setNextButton = function() {
        vm.nextStep = true;
      };

      vm.hoverNext = function(state) {
        vm.buttonHover = state;
      };

      vm.setHoverStep = function(step) {
        vm.hoverStep = step;
      };

      vm.isLoading = false;
      // var stripe = Stripe('pk_live_1p8AWXUweuSHmqbbFJaCEX2G');
      var stripe = Stripe('pk_test_1EIBbNvuJSQ8GPIJFBC71eqP');

      var elements = stripe.elements();
      // for stripe element
      var style = {
        base: {
          // Add your base input styles here. For example:
          fontSize: '16px',
          lineHeight: '24px'
        }
      };
      // Create an instance of the card Element
      var card = elements.create('card', {style: style});
      // Add an instance of the card Element into the `card-element` <div>
      card.mount('#card-element');

      vm.$onInit = function() {
        vm.postcard = {
          frame: postcardService.updateFrameUrl($sce),
          filter: postcardService.getFilter(),
          color: postcardService.getColor(),
          font: postcardService.getFont(),
          font_size: postcardService.getFontSize(),
          image_scale: postcardService.getImageScale(),
          image_x: postcardService.getImagePosX(),
          image_y: postcardService.getImagePosY(),
          subtext: postcardService.getSubtext(),
          text_pos: postcardService.getTextPos(),
          background: postcardService.getBackgroundImage($sce)
        };

        vm.to = postcardService.getAddressedTo();
        vm.from = postcardService.getAddressedFrom();
        vm.message = postcardService.getMessage();

        vm.payment_info = postcardService.getPaymentInfo();

        card.addEventListener('change', function(event) {
          var displayError = document.getElementById('card-errors');
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = '';
          }
        });
        $(".card-preview").flip();
      };

      vm.submitCard = function() {
        if (vm.emailAddress !== "") {
          postcardService.setPaymentInfo(vm.payment_info);
          vm.isLoading = true;
          stripe.createToken(card).then(function(result) {
            if (result.error) {
              vm.isLoading = false;
              // Inform the user if there was an error
              var errorElement = document.getElementById('card-errors');
              errorElement.textContent = result.error.message;
            } else {
              // Send the token to your server
              stripeTokenHandler(result.token);
            }
          });
        } else {
          var errorElement = document.getElementById('email-errors');
          errorElement.textContent = "Must include email address to pay";
          vm.emailInvalid = true;
        }
      };

      vm.updateEmailField = function() {
        vm.emailInvalid = false;
      };

      const stripeTokenHandler = (token) => {
        const form = document.getElementById('payment-form');
        const hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        // Append postcard data to stripe form for post request
        let id = vm.emailAddress + Date.now();
        postcardService.setOrderId(id);
        postcardService.savePostcardData();
        const hiddenData = document.createElement('input');
        hiddenData.setAttribute('type', 'hidden');
        hiddenData.setAttribute('name', 'postcard_data');
        hiddenData.setAttribute('value', JSON.stringify(postcardService.postcard));
        form.appendChild(hiddenData);
        form.submit();
      };

      vm.flip = function() {
        $(".card-preview").flip();
      };
    }
}());
