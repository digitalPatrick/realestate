(function (){
    
    'use strict'
    
    angular
    .module('app.singleview')
    .controller('viewCtrl', viewCtrl);
    
    viewCtrl.$inject = ['angularLoad', '$scope', '$location'];

    
    function viewCtrl(angularLoad, $scope, $location) {
        
     var vm = this;   
        
     angularLoad.loadScript('assets/scripts.js')

     $scope.isActive = function (viewLocation) {
         return viewLocation === $location.path();
     };
    }
    
})();