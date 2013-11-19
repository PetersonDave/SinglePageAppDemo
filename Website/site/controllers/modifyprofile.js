(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'modifyprofile';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId,
        ['$scope', '$routeParams', '$http', '$filter', 'profileservice', modifyprofile]);

    function modifyprofile($scope, $routeParams, $http, $filter, profileservice) {
        var vm = this;
        var profiles = profileservice.getProfiles();

        var profile = $filter('filter')(profiles, function (actual) {
            return actual.id == $routeParams.profileId;
        });

        vm.itemid = profile[0].id;
        vm.first = profile[0].first;
        vm.last = profile[0].last;
        vm.email = profile[0].email;
        vm.company = profile[0].company;
        vm.update = update;

        function update() {
            var params = {};
            params += profilefields.first + '=' + vm.first;
            params += profilefields.last + '=' + vm.last;
            params += profilefields.email + '=' + vm.email;
            params += profilefields.company + '=' + vm.company;

            profileservice.update(vm.itemid, params);
        }
    }
})();