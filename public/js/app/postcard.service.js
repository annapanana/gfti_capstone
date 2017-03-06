'use strict';
(function() {
  angular.module('app')
  // NOTE SCE must be passed in as a param
    .service('postcardService', function() {

      this.postcard = JSON.parse(localStorage.getItem('postcard'));

      this.init = function() {
        let color_id = this.postcard.composition_settings.color_id;
        let theme_id = this.postcard.composition_settings.theme_id;
        this.postcard.color_hex = colorData[theme_id][color_id];
      };

      this.getCompositionSettings = function() {
        return this.postcard.composition_settings;
      };

      this.getFilterData = function() {
        return filterData;
      };

      this.getFrameData = function() {
        return frameData[this.postcard.composition_settings.theme_id];
      };

      this.getColorData = function() {
        return colorData[this.postcard.composition_settings.theme_id];
      };

      this.getFontData = function() {
        return fontData[this.postcard.composition_settings.theme_id];
      }

      this.getBackgroundImage = function($sce) {
        return $sce.trustAsResourceUrl(this.postcard.composition_settings.image_url);
      };

      this.setBackgroundImage = function(image_url) {
        this.postcard.composition_settings.image_url = image_url;
      };

      this.setFilter = function(filter_id) {
        this.postcard.composition_settings.filter_id = filter_id;
      };

      this.getFilter = function() {
        return filterData[this.postcard.composition_settings.filter_id].name;
      };

      this.refreshBackgroundImage = function($sce) {
        let img = this.postcard.composition_settings.image_url + '?' + new Date().getTime();
        return $sce.trustAsResourceUrl(img);
      };

      this.setFrame = function(frame_id) {
        this.postcard.composition_settings.frame_id = frame_id;
      };

      this.updateFrameUrl = function($sce) {
        let frame_id = this.postcard.composition_settings.frame_id;
        let color_id = this.postcard.composition_settings.color_id;
        let theme_id = this.postcard.composition_settings.theme_id;
        this.postcard.frame_url = frameData[theme_id][frame_id].local_frame;
        this.postcard.composition_settings.template_name = frameData[theme_id][frame_id].template_name;
        return this.postcard.frame_url;
      };

      this.setColor = function(color_id) {
        let theme_id = this.postcard.composition_settings.theme_id;
        this.postcard.color_hex = colorData[theme_id][color_id].c;
        this.postcard.composition_settings.color_id = color_id;
      };

      this.getColor = function() {
        let color_id = this.postcard.composition_settings.color_id;
        return colorData[this.postcard.composition_settings.theme_id][color_id].c;
      };

      this.setFont = function(font_id) {
        let theme_id = this.postcard.composition_settings.theme_id;
        this.postcard.font_family = fontData[theme_id][font_id].font;
        this.postcard.composition_settings.font_id = font_id;
      };

      this.getFont = function() {
        let font_id = this.postcard.composition_settings.font_id;
        return fontData[this.postcard.composition_settings.theme_id][font_id].font;
      };

      this.setFontSize = function(size) {
        this.postcard.font_size = size;
        this.postcard.composition_settings.font_size = size;
      }

      this.getFontSize = function() {
        return this.postcard.composition_settings.font_size;
      }

      this.getSubtext = function() {
        return this.postcard.composition_settings.greetings_subtext;
      };

      this.setSubtext = function(text) {
        this.postcard.composition_settings.greetings_subtext = text;
      };

      this.getMessage = function() {
        return this.postcard.message;
      };

      this.setMessage = function(msg) {
        this.postcard.message = msg;
      };

      this.getAddressedTo = function() {
        return this.postcard.to;
      };

      this.setAddressedTo = function(to) {
        this.postcard.to = to;
      };

      this.getAddressedFrom = function() {
        return this.postcard.from;
      };

      this.setAddressedFrom = function(from) {
        this.postcard.from = from;
      };

      this.validateBack = function() {
        console.log("!!!");
        for (let key in this.postcard.to) {
          console.log(this.postcard.to[key]);
          if (this.postcard[key] === "") {
            return false;
          }
        }
        for (let key in this.postcard.from) {
          console.log(this.postcard.to[key]);
          if (this.postcard[key] === "") {
              return false;
          }
        }
        if (this.postcard.message === "") {
          return false;
        }
        return true;
      };

      this.setThumbnail = function(img) {
        this.postcard.thumbnail = img;
      };

      this.getPaymentInfo = function() {
        return this.postcard.payment_info;
      };

      this.setPaymentInfo = function(data) {
        this.postcard.payment_info = data;
      };

      this.setId = function(id) {
        this.postcard.id = id;
      };

      this.setDeliveryDate = function(date) {
        this.postcard.delivery_date = date;
      };

      this.updatePostcardObject = function(obj) {
        console.log("updated object", obj);
        this.postcard.composition_settings = obj;
      };

      this.savePostcardData = function() {
        // console.log(this.postcard);
        localStorage.setItem('postcard', JSON.stringify(this.postcard));
      };
    });
}());
