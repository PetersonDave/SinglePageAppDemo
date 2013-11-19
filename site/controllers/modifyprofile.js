(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'modifyprofile';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId,
        ['$scope', modifyprofile]);

    function modifyprofile($scope) {
        var vm = this;

        vm.itemid = '12345';
        vm.first = 'David';
        vm.last = 'Peterson';
        vm.email = 'dpeterson@isitedesign.com';
        vm.company = 'ISITE Design';
    }    
})();