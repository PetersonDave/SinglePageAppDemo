(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'editprofile';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId,
        ['$scope', '$http', 'profileservice', editprofile]);

    function editprofile($scope, $http, profileservice) {
        var vm = this;

        vm.newprofile = {};
        vm.profileService = profileservice;
        vm.load = function () {
            profileservice.get(populateRepository);
        };
        
        function populateRepository() {
            vm.repository = profileservice.getProfiles();
        }
    }
})();
