 (function() {
        
    "use strict";

    angular
    .module('home')
    .controller('home', home);

    home.$inject = [ 'homeService' ];
    
    function home(homeService) {
        var home = this;
        home.title = 'Bem-vindo';
        home.user = {};
        
        homeService
            .userData()
                .then(ret => {
                    home.user = ret.data;
                })
                    .catch(err => homeService.validate(err));
    };

})();

