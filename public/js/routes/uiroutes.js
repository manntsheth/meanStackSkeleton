angular.module('myapp').config(function ($urlRouterProvider, $stateProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: '/views/home.html',
                controller: 'controllerTwo'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/views/register.html',
                controller: 'RegisterCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/views/login.html',
                controller: 'LoginCtrl'
            })
            .state('jobs', {
                url: '/jobs',
                templateUrl: '/views/jobs.html',
                controller: 'JobsCtrl'
            })
            .state('logout', {
                url: '/logout',
                controller: 'LogoutCtrl'
            });
        $httpProvider.interceptors.push('authInterceptor');
    })
    .constant('API_URL', 'http://localhost:5000/');