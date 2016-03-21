angular.module('MainController', []).controller('controllerOne', ['$scope', 'serviceone', function ($scope, serviceone) {
    $scope.myVarOne = "Hello angular";
    $scope.thisControllerTag = "Using controllerOne";
    $scope.user = {
        name: '',
        rollno: ''
    };
    $scope.postMethod = function (user) {

        var jsonEntry = {
            name: user.name,
            rollno: user.rollno
        };
        console.log('inside postmethod' + JSON.stringify(jsonEntry));
        serviceone.create(jsonEntry);
    };
}]);