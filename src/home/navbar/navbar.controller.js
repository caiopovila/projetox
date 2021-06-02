(function() {
        
    "use strict";

    angular
    .module('home')
    .controller('navbar', navbar);

    navbar.$inject = [ 'homeService',  ];
    
    function navbar(homeService) {
        var navbar = this;
        navbar.title = 'ProjetoX';
        
        navbar.menu = [
             { name: "Meus seguros", link: "/quotations" },
             { name: "Seguros", link: "/covers" }
        ];
        
        navbar.exit = exit;
        
        function exit() {
            homeService.exit();
        }
    };

})(); 
 
