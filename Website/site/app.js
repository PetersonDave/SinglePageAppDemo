(function () {
    'use strict';

    // Module name is handy for logging
    var id = 'app';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        'ngAnimate',        // animations
        'ngRoute'           // routing
    ]);

    // Application routing
    app.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider.
            when('/profiles', {
                templateUrl: 'site/views/profiles.html',
                controller: 'phonelist'
            }).
            when('/profiles/:profileId', {
                templateUrl: 'site/views/modifyprofile.html',
                controller: 'modifyprofile'
            }).
            otherwise({
                templateUrl: 'site/views/editprofile.html',
                controller: 'editprofile'
            });
      }]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();