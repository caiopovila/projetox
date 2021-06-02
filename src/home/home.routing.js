(function() {
    
    "use strict";
        
    angular
        .module('home')
        .config(config);
    
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: './src/home/home.html',
                controller: 'home',
                controllerAs: 'h'
            })
            .when('/quotations', {
                templateUrl: './src/home/quotations/quotations.html',
                controller: 'quotations',
                controllerAs: 'q'
            })
            .when('/covers', {
                templateUrl: './src/home/covers/covers.html',
                controller: 'covers',
                controllerAs: 'c'
            })
            .otherwise('/');
            
        $locationProvider.html5Mode(true);
    }
    
})() 
 
