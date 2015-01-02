/* global toastr:false*/
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('AzureMobileServiceClient', {
            API_URL: 'https://realestateservice.azure-mobile.net/',
            API_KEY: 'WwagBdZdumvDaYLGlNYWBovNCAAoBT42'
        });

})();
