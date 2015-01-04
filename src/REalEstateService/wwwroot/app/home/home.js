(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['angularLoad', 'logger', 'Azureservice', '$scope', '$q', '$rootScope'];

    function homeCtrl(angularLoad, logger, Azureservice, $scope, $q, $rootScope)
    {

        $scope.homePage = null;

        $scope.mainheader = true;
        $scope.agentHeader = false;

        
        activate();

        function activate()
        {
            return $q.all(getHomePage()).then(function () {
                logger.info('Activated data View');
            });
        }

        function getHomePage()
        {
            if ($scope.homePage) {
                logger.info('Data Already Loaded');
            }
            else {
                Azureservice.invokeApi('HomePageAPI', {
                    method: 'get'
                }).then(function (item) {
                    $scope.homePage = item;
                    console.log($scope.homePage); //remove in production
                }), function (err) {
                    logger.info('There was an error quering Azure ' + err)
                }
            }
        }

         /**load scripts and css here **/
            angularLoad.loadScript('assets/scripts.js');

    }
})();

