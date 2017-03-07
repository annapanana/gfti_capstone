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
      var stripe = Stripe('pk_live_1p8AWXUweuSHmqbbFJaCEX2G');
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

        const form = document.getElementById('payment-form');
        const hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        postcardService.savePostcardData();
        const hiddenData = document.createElement('input');
        hiddenData.setAttribute('name', 'postcard_data');
        hiddenData.setAttribute('value', JSON.stringify(postcardService.postcard));
        form.appendChild(hiddenData);

        var postReq = form.submit();


        // Submit the form
        // $http.post('/postcards', postcardService.postcard).then((result) => {
        //   console.log("result", result.data[0].postcard.url);
        //   postcardService.setThumbnail(result.data[0].postcard.thumbnails[0].large);
        //   postcardService.setId(result.data[0].id);
        //   postcardService.setDeliveryDate(result.data[0].postcard.expected_delivery_date);
        //   postcardService.setPreview(result.data[0].postcard.url);
        //   console.log(result.data[0].postcard.expected_delivery_date);
        //   postcardService.savePostcardData();
        //   // localStorage.setItem('postcard', JSON.stringify(postcard));
        //   $state.go('postcardSent', null, { reload: true }));
        // });

      };

      vm.flip = function() {
        $(".card-preview").flip();
      };
    }
}());
