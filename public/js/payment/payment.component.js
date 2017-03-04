'use strict';
(function() {
  angular.module('app')
    .component('payment', {
      templateUrl: 'js/payment/payment.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$timeout", "$sce", "postcardService"];
    function controller($http, $state, $stateParams, $timeout, $sce, postcardService) {
      const vm = this;
      vm.curStep = 5;

      vm.isLoading = false;
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
          subtext: postcardService.getSubtext(),
          background: postcardService.getBackgroundImage($sce)
        };

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
        //TODO get this info from stripe?
        postcardService.setPaymentInfo(vm.payment_info);

        vm.isLoading = true;
        stripe.createToken(card).then(function(result) {
          if (result.error) {
            // Inform the user if there was an error
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
          } else {
            // Send the token to your server
            stripeTokenHandler(result.token);
          }
        });
      };

      const stripeTokenHandler = (token) => {
        // Insert the token ID into the form so it gets submitted to the server
        const form = document.getElementById('payment-form');
        const hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);
        postcardService.savePostcardData();
        // Submit the form
        $http.post('/postcards', postcardService.postcard).then((result) => {
          console.log("result", result.data);
          postcardService.setThumbnail(result.data[0].postcard.thumbnails[0].large);
          postcardService.setId(result.data[0].id);
          postcardService.setDeliveryDate(result.data[0].postcard.expected_delivery_date);

          postcardService.savePostcardData();
          // localStorage.setItem('postcard', JSON.stringify(postcard));
          $state.go('postcardSent');
        });
      };

      vm.flip = function() {
        $(".card-preview").flip();
      };
    }
}());
