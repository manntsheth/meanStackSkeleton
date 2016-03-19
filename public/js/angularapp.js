var myapp = angular.module('myapp', ['ngRoute']);

myapp.controller('controllerOne', function ($scope) {
    $scope.myVarOne = "Hello angular";
});