(function() {
        
    "use strict";

    angular
    .module('projetox')
    .controller('login', login);

    login.$inject = [ '$location', 'loginService', 'sessionService' ];
    
    function login($location, loginService, sessionService) {
        let login = this;
        
        login.data = {};
        login.title = 'Entrar';
        login.data.username = '';
        login.data.password = '';
         
        login.auth = logger;
        
        function logger() {
            loginService
                .auth(login.data)
                    .then(ret => {
                        sessionService.setToken(typeof ret.data === 'string' ? ret.data : '');
                        $location.path('/home');
                        $location.replace();
                    })
                        .catch(err =>  loginService.validate(err));   
        };
    };

})(); 
