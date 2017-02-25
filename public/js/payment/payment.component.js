'use strict';
(function() {
  angular.module('app')
    .component('payment', {
      templateUrl: 'js/payment/payment.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$timeout"];
    function controller($http, $state, $stateParams, $timeout) {
      const vm = this;
      var postcard = {};
      vm.payment_info = {};
      vm.imagePreview = "http://placehold.it/350x150";
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
        postcard = JSON.parse(localStorage.getItem('postcard'));
        // TODO Load postcard preview settings
        vm.payment_info = postcard.payment_info;

        card.addEventListener('change', function(event) {
          var displayError = document.getElementById('card-errors');
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = '';
          }
        });
      };

      vm.submitCard = function() {
        postcard.payment_info = vm.payment_info;

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

        // Submit the form
        $http.post('/postcards', postcard).then((result) => {
          console.log("result", result.data);

          $timeout(function() {
            postcard.thumbnail = result.data[0].postcard.thumbnails[0].large;
            postcard.deliveryDate = result.data[0].postcard.expected_delivery_date;
            postcard.id = result.data[0].id;
            localStorage.setItem('postcard', JSON.stringify(postcard));
            $state.go('postcardSent');
          }, 5000);
        });
      };
    }
}());
