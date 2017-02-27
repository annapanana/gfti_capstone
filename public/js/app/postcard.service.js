'use strict';
(function() {
  angular.module('app')
  // NOTE SCE must be passed in as a param
    .service('postcardService', function() {

      this.postcard = JSON.parse(localStorage.getItem('postcard'));

      this.getCompositionSettings = function() {
        return this.postcard.composition_settings;
      };

      this.getFilterData = function() {
        return filterData;
      };

      this.getFrameData = function() {
        console.log(frameData[this.postcard.composition_settings.theme_id]);
        return frameData[this.postcard.composition_settings.theme_id];
      };

      this.getColorData = function() {
        return colorData[this.postcard.composition_settings.theme_id];
      };

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
        console.log(img);
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
        return this.postcard.frame_url;
      };

      this.setColor = function(color_id) {
        this.postcard.composition_settings.color_id = color_id;
      };

      this.getColor = function() {
        let color_id = this.postcard.composition_settings.color_id;
        return colorData[this.postcard.composition_settings.theme_id][color_id].c;
      };

      this.getSubtext = function() {
        return this.postcard.composition_settings.greetings_subtext;
      };

      this.setSubtext = function(text) {
        this.postcard.composition_settings.greetings_subtext = text;
      }

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

      this.savePostcardData = function() {
        localStorage.setItem('postcard', JSON.stringify(this.postcard));
      };
    });
}());
