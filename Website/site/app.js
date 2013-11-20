(function () {
    'use strict';

    // Module name is handy for logging
    var id = 'app';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        'ngAnimate',        // animations
        'ngRoute'           // routing
    ]);

    // Sitecore field constants
    app.factory('profilefields', function () {
        var myProfileFields = {};

        myProfileFields.first = '{13B74B58-A809-469D-9AC3-CA235CF54DCA}';
        myProfileFields.last = '{1F113AF1-1234-48F2-88B7-F56974C225DB}';
        myProfileFields.email = '{762EA0AA-0F96-407C-81F0-2C75E60CFDA9}';
        myProfileFields.company = '{2B9CCEE5-5217-44FA-AF23-D3E87F9A04A1}';

        return myProfileFields;
    });

    // Profile service entry point for Sitecore Web API
    app.factory('profileservice', function ($http) {
        var items = {};
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

        // example update: https://github.com/herskinduk/Usergroup.ItemWebApi/blob/master/ItemConsole/UpdateExample.cs
        myProfileService.update = function (itemid, params) {
            console.log(params);

            var url = '-/item/v1/?sc_itemid=' + itemid;
            $http.put(url, params);
        };

        myProfileService.get = function (callback) {
            var url = '-/item/v1/?scope=s&query=/sitecore/content/Home/Repository/*';
            $http.get(url)
                .then(function (res) {
                    items = res.data.result.items;
                    callback();
                });
        };

        return myProfileService;
    });

    //// Application routing
    //app.config(['$routeProvider',
    //  function ($routeProvider) {
    //      $routeProvider.
    //        when('/profiles', {
    //            templateUrl: 'site/views/allprofiles.html',
    //            controller: 'allprofiles'
    //        }).
    //        when('/profiles/:profileId', {
    //            templateUrl: 'site/views/modifyprofile.html',
    //            controller: 'modifyprofile'
    //        }).
    //        otherwise({
    //            templateUrl: 'site/views/main.html',
    //            controller: 'main'
    //        });
    //  }],
    //'$httpProvider', function ($httpProvider) {
    //    $httpProvider.defaults.headers.put = { 'X-Scitemwebapi-Username': 'admin' };
    //    $httpProvider.defaults.headers.put = { 'X-Scitemwebapi-Password': 'b' };
    //});

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();