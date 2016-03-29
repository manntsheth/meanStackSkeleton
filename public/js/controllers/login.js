angular.module('myapp').controller('LoginCtrl', function ($scope, alert, auth) {
    $scope.submit = function () {

        auth.login($scope.email, $scope.password)
            .success(function (res) {
                console.log("good");
                alert('success', 'Welcome!', 'Thanks for coming back' + res.user.email + '!');

            })
            .error(function (err) {
                console.log("bad");
                alert('warning', 'Something went wrong!', err.message);
            });
    };
});