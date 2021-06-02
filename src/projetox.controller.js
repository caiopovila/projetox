(function() {
        
    "use strict";

    angular
    .module('projetox')
    .controller('projetox', init);

    init.$inject = [ '$location' ];
    
    function init($location) {
        
        var init = this;
        init.title = 'Projeto X';
        
        if(sessionStorage.getItem('key')) {
            $location.path('/home');
            $location.replace();
        };
        
    };

})();
