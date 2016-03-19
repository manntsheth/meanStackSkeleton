angular.module('angularroutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'controllerOne'
        })
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'controllerTwo'
        });

    $locationProvider.html5Mode(true);
}]);