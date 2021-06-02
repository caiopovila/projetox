(function() {
        
    "use strict";

    angular
    .module('home')
    .component('navbar', {
        templateUrl: './src/home/navbar/navbar.html',
        controller: 'navbar',
        controllerAs: 'n'
    });

})(); 
