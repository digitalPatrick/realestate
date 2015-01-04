(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('headerCtrl', headerCtrl);

    headerCtrl.$inject = ['$scope', '$route', '$routeParams'];

    function headerCtrl($scope, $route, $routeParams) {

        $scope.header = $route.current.header;

        console.log($scope.header);
    };

})();

