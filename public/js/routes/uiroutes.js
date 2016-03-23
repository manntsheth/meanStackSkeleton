angular.module('myapp').config(function ($urlRouterProvider, $stateProvider) {
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
        .state('logout', {
            url: '/logout',
            controller: 'LogoutCtrl'
        });

});