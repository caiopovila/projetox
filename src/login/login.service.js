(function() {
        
    "use strict";

    angular
    .module('projetox')
    .factory('loginService', loginService);

    loginService.$inject = [ '$http' ];
    
    function loginService($http) {
        var service = {
            auth: auth,
            validate: validate
        };
        
        return service;
        
        function auth(data) {
            return $http.post('http://localhost:3000/auth', data);
        };
        
        function validate(err) {
            switch(err.status) {
                case 422:
                    alert('Corrija os campos em vermelho');
                    break;
                    
                case 401:
                    alert('Cliente não encontrado');
                    break;
                    
                default:
                    alert('Erro inesperado');
                    break;
            }
        }
    };

})(); 
 
