(function() {
        
    "use strict";

    angular
        .module('projetox')
        .factory('sessionService', sessionService);

    function sessionService() {
        var service = {
            getToken: getToken,
            setToken: setToken,
            clear: clear
        };

        return service;
        
        function getToken() {
            return sessionStorage.getItem('key') || '';
        }
        
        function setToken(token) {
            sessionStorage.setItem('key', token);
            return;
        }
        
        function clear() {
            sessionStorage.clear();
            return;
        }
    };

})();  
