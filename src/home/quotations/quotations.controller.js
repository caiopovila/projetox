 (function() {

    "use strict";

    angular
    .module('home')
    .controller('quotations', quotations);

    quotations.$inject = [ 'homeService' ];

    function quotations(homeService) {
        var quotations = this;
        quotations.title = 'Meus seguros';
        quotations.quotation = {};
        quotations.proposal = {};
        quotations.policy = {};
        quotations.covers = [];
        quotations.data = {};
        quotations.data.cover = '';
        quotations.data.cpf = '';
        quotations.data.value = '';
        quotations.data.initiate = '';
        quotations.data.finish = '';
        quotations.payment = '';
        quotations.sendQuotation = sendQuotation;
        quotations.sendProposal= sendProposal;
        quotations.sendPolicy= sendPolicy;
        
        homeService
            .policy()
                .then(ret => quotations.policy = ret.data)
                    .catch(err => homeService.validate(err));

        homeService
            .proposal()
                .then(ret => quotations.proposal = ret.data)
                    .catch(err => homeService.validate(err));
                            
        homeService
            .quotation()
                .then(ret => quotations.quotation = ret.data)
                    .catch(err => homeService.validate(err));
                    
        homeService
            .covers()
                .then(ret => quotations.covers = ret.data)
                    .catch(err => homeService.validate(err));

    
        function sendQuotation() {
            homeService
                .newQuotation(quotations.data)
                    .then(ret => {
                        quotations.quotation = ret.data;
                        alert('Cotação criada com sucesso');
                    })
                        .catch(err => homeService.validate(err));            
        };
                    
        function sendProposal() {
            homeService
                .newProposal(quotations.payment)
                    .then(ret => {
                        quotations.proposal = ret.data;
                        alert('Proposta aceita com sucesso');
                    })
                        .catch(err => homeService.validate(err));            
        };          
        
        function sendPolicy() {
            homeService
                .newPolicy()
                    .then(ret => {
                        quotations.policy = ret.data;
                        alert('Police gerada com sucesso');
                    })
                        .catch(err => homeService.validate(err));            
        };   
    };

})();

 
