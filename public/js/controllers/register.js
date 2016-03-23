angular.module('myapp').controller('RegisterCtrl', ['$scope', '$http', 'alert', 'authToken', function ($scope, $http, alert, authToken) {
    $scope.submit = function () {
        var url = '/register';
        var user = {
            email: $scope.email,
            password: $scope.password
        };
        $http.post(url, user)
            .success(function (res) {
                console.log("good");
                alert('success', 'OK!', 'You are now registered');
                authToken.setToken(res.token);
            })
            .error(function (err) {
                console.log("bad");
                alert('warning', 'Opps!', 'Could not register');
            });
    };
}]);