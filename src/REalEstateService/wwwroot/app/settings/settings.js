(function() {
    'use strict';

    angular
        .module('app.settings')
        .controller('settingsCtrl', settingsCtrl);

    settingsCtrl.$inject = ['angularLoad', 'logger', 'Azureservice', '$scope'];

    function settingsCtrl(angularLoad, logger, Azureservice, $scope) {

        activate();

        function activate() {
           
                logger.info('Settings View');
        }

    }
})();

