(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'allprofiles';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId,
        ['$scope', 'profileservice', allprofiles]);

    function allprofiles($scope, profileservice) {
        var vm = this;

        vm.load = function () {
            profileservice.get(populateRepository);
        };

        function populateRepository() {
            vm.profiles = profileservice.getProfiles();
        }
    }
})();
