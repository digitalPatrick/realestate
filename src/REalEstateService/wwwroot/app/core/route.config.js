(function () {
    'user strict';

    angular.module('app.core')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
       
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl',
            activetab: 'home'
            })
            .when('/contact', {
                templateUrl: 'app/contact/contact.html',
                controller: 'contactCtrl as vm',
                activetab: 'contact'
            })
            .when('/services', {
                templateUrl: 'app/singleview/services.html',
                controller: 'viewCtrl as vm',
                activetab: 'services'
            })
            .when('/terms', {
                templateUrl: 'app/singleview//terms.html',
                controller: 'viewCtrl as vm'
            })
             .when('/agent/:agentuserName', {
                 templateUrl: 'app/agentLandingPage/agent.html',
                 controller: 'agentCtrl',
                 activetab: 'agent'
             }).when('/agent/:agentuserName/contact', {
                 templateUrl: 'app/agentLandingPage/agentContact.html',
                 controller: 'agentCtrl',
                 activetab: 'agentContact'
             })                   
             .when('/privacy', {
                 templateUrl: 'app/singleview//privacy.html',
                 controller: 'viewCtrl'
             })
             .when('/faq', {
                 templateUrl: 'app/singleview/faq.html',
                 controller: 'viewCtrl'
            }).when('/test', {
                templateUrl: 'home/test.html',
                controller: 'homeCtrl'
            });
       
        $routeProvider.otherwise({redirectTo: '/'});
       
    }]);


}());