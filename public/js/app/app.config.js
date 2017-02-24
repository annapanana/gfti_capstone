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
          name: "home",
          parent: "app",
          url: "/",
          component: "home"
        })
        .state({
          name: "payment",
          parent: "app",
          url: "/payment",
          component: "payment"
        })
        .state({
          name: "messageComposition",
          parent: "app",
          url: "/message-composition",
          component: "messageComposition",
          resolve: {
            themeData: function($http) {
              return $http({method: 'GET', url: '/themes'});
            },
            filterData: function($http) {
              return $http({method: 'GET', url: '/filters'});
            }
          }
        })
        .state({
          name: "imageComposition",
          parent: "app",
          url: "/image-composition",
          component: "imageComposition",
          resolve: {
            themeData: function($http) {
              return $http({method: 'GET', url: '/themes'});
            },
            filterData: function($http) {
              return $http({method: 'GET', url: '/filters'});
            }
          }
        })
        .state({
          name: "photoUpload",
          parent: "app",
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
          parent: "app",
          url: "/theme-selection",
          component: "themeSelection"
        })
    }
}());
