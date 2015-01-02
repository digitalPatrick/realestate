(function() {
    'use strict';

    var core = angular.module('app.core');
    
    //'GoogleMapApiProvider'.ns() == 'uiGmapGoogleMapApiProvider'
    core.config(['uiGmapGoogleMapApiProvider', function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }])
    
    core.config(['$httpProvider', function ($httpProvider) { // coniguring the httpProvider
        //$httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'WwagBdZdumvDaYLGlNYWBovNCAAoBT42'; // add the application key
        $httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';
    }]);

    core.config(function (paginationTemplateProvider) {
        paginationTemplateProvider.setPath('dist/dirPagination.tpl.html')
    })

    core.config(toastrConfig);

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[NG-Modular Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Angular Modular Demo',
        version: '1.0.0'
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    function configure ($logProvider, $routeProvider, exceptionHandlerProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }


        // Configure the common exception handler
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
})();
