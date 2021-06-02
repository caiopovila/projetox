 (function() {
        
    "use strict";

    angular
    .module('home')
    .factory('homeService', homeService);

    homeService.$inject = [ '$http', '$location', 'sessionService' ];
    
    function homeService($http, $location, sessionService) {
        const host = 'http://localhost:3000';

        var service = {
            userData: userData,
            policy: policy,
            newPolicy: newPolicy,
            quotation: quotation,
            newQuotation: newQuotation,
            proposal: proposal,
            newProposal: newProposal,
            covers: covers,
            exit: exit,
            validate: validate
        };
        
        return service;
        
        function userData() {
            return $http.get(host + '/user');
        };
        
        function policy() {
            return $http.get(host + '/policy');
        };
        
        function newPolicy() {
            return $http.post(host + '/policy');
        };
        
        function quotation() {
            return $http.get(host + '/quotation');
        };
        
        function newQuotation(data) {
            return $http.post(host + '/quotation', data);
        };
          
        function proposal() {
            return $http.get(host + '/proposal');
        };
              
        function newProposal(data) {
            return $http.post(host + '/proposal', { payment: data });
        };
        
        function covers() {
            return $http.get(host + '/cover');
        };
        
        function exit() {
            $http
                .get(host + '/logout')
                    .then(() => {
                        sessionService.clear();
                        $location.path('/');
                        $location.replace();
                    })
                    .catch(err => {
                        console.log(err);
                        validate(err.status);
                    });
            return;
        };
        
        function validate(err) {
            switch(err.status) {
                case 422:
                    alert(err.data.message ? err.data.message : err.data.code && err.data.code == 11000 ? `${ Object.keys(err.data.keyValue)[0] } já existe` : 'Corrija os campos em vermelho');
                    break;
                    
                case 401:
                    sessionService.clear();
                    $location.path('/');
                    $location.replace();
                    break;
                    
                default:
                    alert('Erro inesperado');
                    break;
            }
        }
    };

})(); 
 

