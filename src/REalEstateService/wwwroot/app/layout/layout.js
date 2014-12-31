(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('layoutCtrl', layoutCtrl);

    layoutCtrl.$inject = ['$scope', '$route'];

    function layoutCtrl($scope, $route)
    {
        $scope.isActive = $route.current.activetab;
    };

})();

