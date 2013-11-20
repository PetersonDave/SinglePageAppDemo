(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
        {
            url: '/profiles',
            config: {
                templateUrl: 'Views/allprofiles',
                controller: 'allprofiles'
            }
        }, {
            url: '/profiles/:profileId',
            config: {
                templateUrl: 'Views/modifyprofile',
                controller: 'modifyprofile'
            }
        }, {
            url: '/',
            config: {
                templateUrl: 'Views/main',
                controller: 'main'
            }
        }];
    }
})();