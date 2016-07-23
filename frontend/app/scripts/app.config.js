angular
    .module('jwtAuthApp')

    .config(function ($stateProvider) {
        $stateProvider

            .state('main', {
                url: '/',
                templateUrl: '/views/main.html',
                controller: 'MainCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: '/views/login.html',
                controller: 'LoginCtrl'
            })

            .state('register', {
                url: '/register',
                templateUrl: '/views/register.html',
                controller: 'RegisterCtrl'
            })

            .state('logout', {
                url: '/logout',
                controller: 'LogoutCtrl'
            });
    })

    .constant('API_URL', 'http://localhost:3000/');