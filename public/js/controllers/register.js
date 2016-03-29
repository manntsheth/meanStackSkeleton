angular.module('myapp').controller('RegisterCtrl', ['$scope', '$http', 'alert', 'authToken', 'API_URL', function ($scope, $http, alert, authToken, API_URL) {
    $scope.submit = function () {
        var url = API_URL + 'register';
        var user = {
            email: $scope.email,
            password: $scope.password
        };
        $http.post(url, user)
            .success(function (res) {
                console.log("good");
                alert('success', 'Account Created!', 'Welcome,' + res.user.email + '!');
                authToken.setToken(res.token);
            })
            .error(function (err) {
                console.log("bad");
                alert('warning', 'Opps!', 'Could not register');
            });
    };
}]);