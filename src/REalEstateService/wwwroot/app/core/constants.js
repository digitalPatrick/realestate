/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('AzureMobileServiceClient', {
            API_URL: 'https://realestateservice.azure-mobile.net/',
            API_KEY: 'WwagBdZdumvDaYLGlNYWBovNCAAoBT42'
        });

})();
