(function () {
    'use strict';

    angular
        .module('app.directive')
    .directive('headerdir', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/layout/mainheader.html'
        }
    })
    .directive('agentHeader', function myfunction() {
        return {
            restrict: 'E',
            templateUrl: 'app/layout/agentheader.html'
        }
    });

})();

