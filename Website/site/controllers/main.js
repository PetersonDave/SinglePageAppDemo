(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'main';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId,
        ['$scope', 'profileservice', main]);

    function main($scope, profileservice) {
        var vm = this;
    }
})();
