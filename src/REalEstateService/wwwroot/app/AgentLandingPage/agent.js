(function () {
    'use strict';

    angular.module('app.agent')
    .controller('agentCtrl', agentCtrl);

    agentCtrl.$injectt = ['angularLoad', '$routeParams', '$scope', 'Azureservice', '$q', 'logger', 'uiGmapGoogleMapApi'];

    function agentCtrl(angularLoad, $routeParams, $scope, Azureservice, $q, logger, uiGmapGoogleMapApi) {
        //var vm = this;

        
        $scope.profile = [];
        $scope.agentApartments = null;
        $scope.agentName = ($routeParams.agentuserName);
        $scope.totalApartments = 40;
        $scope.pageSize = 9; // this should match however many results your API puts on one page
         // start on the first page

        $scope.pagination = {
            current: 0
        };

        var vm = this;
        $scope.lat = 28.046325;
        $scope.long = -82.43074;
        vm.name = 'leon';
        $scope.map = { center: { latitude: $scope.lat, longitude: $scope.long }, zoom: 15 };
        $scope.options = { scrollwheel: false };
        $scope.marker = {
            id: 1,
            coords: {
                latitude: $scope.lat,
                longitude: $scope.long
            }
        };
        

        activate();

        $scope.pageChanged = function (newPage) {
            getAgentsApartments(newPage);
        };

        function activate() {
            /**load scripts and css here **/
            angularLoad.loadScript('assets/scripts.js');

            return $q.all([getAgentProfile(), getAgentsApartments(1)]).then(function () {
                logger.info('Activated data View');
            });
        }


        function getAgentProfile() 
        {
            Azureservice.invokeApi('AgentProfileAPI', {
                method: 'get',
                parameters: {
                    agentname: $scope.agentName,
                }
            })
           .then(function (response) {
               console.log('Here is my response object'); // remove in production
               console.log(response); // remove in production
               $scope.profile = response;
           }, function (err) {
               console.error('Azure Error: ' + err);
           });
        }

        function getAgentsApartments(pageNumber)
        {
            Azureservice.invokeApi('apartmentapi', {
                method: 'get',
                parameters: {
                    username: $scope.agentName,
                    pageIndex: pageNumber - 1,
                    pageSize: $scope.pageSize
                }
            }).then(function (response) {
                console.log(response); // remove in production
                $scope.agentApartments = response;
            }, function (err) {
                console.error('Azure Error: ' + err);
            });

        }

        /**load scripts and css here **/
        angularLoad.loadScript('assets/scripts.js');
}

}());
