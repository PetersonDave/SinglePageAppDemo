(function () {
    'use strict';

    // Module name is handy for logging
    var id = 'app';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        'ngAnimate',        // animations
        'ngRoute'           // routing
    ]);

    // Profile service entry point for Sitecore Web API
    app.factory('profileservice', function ($http) {
        var items = [];
        var myProfileService = {};

        myProfileService.addItem = function (item) {
            items.push(item);
        };
        myProfileService.removeItem = function (item) {
            var index = items.indexOf(item);
            items.splice(index, 1);
        };
        myProfileService.getProfiles = function () {
            return items;
        };

        myProfileService.update = function (itemid, params) {
            // TBD
        };

        myProfileService.get = function (callback) {
            items = [];
            var i = {};
            i.id = "1";
            i.first = "David";
            i.last = "Peterson";
            i.email = "dpeterson@isitedesign.com";
            i.company = "ISITE Design";

            items.push(i);

            callback();
        };

        return myProfileService;
    });


    // Application routing
    app.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider.
            when('/profiles', {
                templateUrl: 'site/views/allprofiles.html',
                controller: 'allprofiles'
            }).
            when('/profiles/:profileId', {
                templateUrl: 'site/views/modifyprofile.html',
                controller: 'modifyprofile'
            }).
            otherwise({
                templateUrl: 'site/views/main.html',
                controller: 'main'
            });
      }]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();