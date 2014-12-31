(function () {
 'use strict';   
    
    angular.module('app.core', [
       'ngRoute',
        'ngSanitize',
        'ngResource',
        'ngMessages',
        'angularLoad',
        'uiGmapgoogle-maps',
        'angularUtils.directives.dirPagination',

        'blocks.exception',
        'blocks.logger'
    ]);
})();