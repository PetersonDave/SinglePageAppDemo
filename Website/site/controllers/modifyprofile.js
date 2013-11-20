(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'modifyprofile';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId,
        ['$scope', '$routeParams', '$http', '$filter', 'profileservice', 'profilefields', modifyprofile]);

    function modifyprofile($scope, $routeParams, $http, $filter, profileservice, profilefields) {
        var vm = this;
        var profiles = profileservice.getProfiles();

        var profile = $filter('filter')(profiles, function (actual) {
            return actual.ID == $routeParams.profileId;
        });

        vm.itemid = profile[0].ID;
        vm.first = profile[0].Fields[profilefields.first].Value;
        vm.last = profile[0].Fields[profilefields.last].Value;
        vm.email = profile[0].Fields[profilefields.email].Value;
        vm.company = profile[0].Fields[profilefields.company].Value;
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