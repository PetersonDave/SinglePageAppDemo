(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'editprofile';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId,
        ['$scope', editprofile]);

    function editprofile($scope) {
        var vm = this;

        vm.newprofile = {};
    }
})();
