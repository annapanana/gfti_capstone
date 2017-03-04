'use strict';
(function() {

  angular.module('app')
    .config(config)

    config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
        .state({
          name: "app",
          abstract: true,
          component: "app"
        })
        .state({
          name: "tool",
          parent: "app",
          abstract: true,
          component: "tool"
        })
        .state({
          name: "home",
          parent: "app",
          url: "/",
          component: "home"
        })
        .state({
          name: "payment",
          parent: "tool",
          url: "/payment",
          component: "payment"
        })
        .state({
          name: "messageComposition",
          parent: "tool",
          url: "/message-composition",
          component: "messageComposition"
        })
        .state({
          name: "imageComposition",
          parent: "tool",
          url: "/image-composition",
          component: "imageComposition"
        })
        .state({
          name: "photoUpload",
          parent: "tool",
          url: "/photo-upload",
          component: "photoUpload"
        })
        .state({
          name: "archive",
          parent: "app",
          url: "/archive",
          component: "archive"
        })
        .state({
          name: "dev",
          parent: "app",
          url: "/dev",
          component: "dev"
        })
        .state({
          name: "themeSelection",
          parent: "tool",
          url: "/theme-selection",
          component: "themeSelection"
        })
        .state({
          name: "postcardSent",
          parent: "tool",
          url: "postcard-sent",
          component: "postcardSent"
        });
    }
}());
