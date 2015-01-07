(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('layoutCtrl', layoutCtrl);

    layoutCtrl.$inject = ['$scope', '$route', 'Azureservice'];

    function layoutCtrl($scope, $route, Azureservice)
    {

        $scope.isActive = $route.current.activetab;

        activate();

        function activate() {
            $scope.isLoggedIn = Azureservice.isLoggedIn();
            console.log($scope.isLoggedIn);
        }

        $scope.logout = function () {
            Azureservice.logout();
            $scope.isLoggedIn = false;
        }

        $scope.login = function (authProvider)
        {
            Azureservice.login(authProvider)
            .then(function () {
                console.log(sessionStorage.loggedInUser);
                console.log('Login successful');
                $scope.isLoggedIn = true;
                checkNewUser();
            }, function (err) {
            console.error('Azure Error: ' + err);
            });            
        }

        function checkNewUser()
        {
            Azureservice.invokeApi('LoginAPI', {
                method: 'get',
            })
           .then(function (response) {
               console.log('Here is my response object'); // remove in production
               console.log(response); // remove in production
           }, function (err) {
               console.error('Azure Error: ' + err);
           });
        }
    };

})();

