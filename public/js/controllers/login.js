angular.module('myapp').controller('LoginCtrl', function ($scope, $http, alert, authToken, API_URL) {
    $scope.submit = function () {
        var url = API_URL + 'login';
        var user = {
            email: $scope.email,
            password: $scope.password
        };
        $http.post(url, user)
            .success(function (res) {
                console.log("good");
                alert('success', 'Welcome!', 'Thanks for coming back' + res.user.email + '!');
                authToken.setToken(res.token);
            })
            .error(function (err) {
                console.log("bad");
                alert('warning', 'Something went wrong!', err.message);
            });
    };
});