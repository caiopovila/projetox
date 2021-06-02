(function() {
    
    "use strict";
        
    angular
        .module('projetox')
        .config(config);
    
    function config($locationProvider, $routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './src/projetox.html',
                controller: 'projetox',
                controllerAs: 'init'
            })
            .otherwise('/');
            
        $locationProvider.html5Mode(true);
        
        $httpProvider.interceptors.push('interceptorService');
    }
    
})() 
