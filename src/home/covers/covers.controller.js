 (function() {
        
    "use strict";

    angular
    .module('home')
    .controller('covers', covers);

    covers.$inject = [ 'homeService' ];
    
    function covers(homeService) {
        var covers = this;
        covers.title = 'Coberturas';
        
        covers.covers = [];
        
        homeService
            .covers()
                .then(ret => covers.covers = ret.data)
                .catch(err => homeService.validate(err))
    };

})(); 
 
