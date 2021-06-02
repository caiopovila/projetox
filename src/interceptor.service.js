(function() {
        
    "use strict";

    angular
        .module('projetox')
        .factory('interceptorService', interceptorService);

    interceptorService.$inject = [ 'sessionService' ];

    function interceptorService(sessionService) {
        return {
            'request': function(config) {
                let token = sessionService.getToken();
                if (token != '')
                    config.headers.Authorization = 'Bearer ' +  token;
                
                return config;
            }
        };
    };

})();   
