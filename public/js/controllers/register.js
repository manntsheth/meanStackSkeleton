angular.module('myapp').controller('RegisterCtrl', ['$scope', 'alert', 'auth', function ($scope, alert, auth) {
    $scope.submit = function () {

        auth.register($scope.email, $scope.password)
            .success(function (res) {
                console.log("good");
                alert('success', 'Account Created!', 'Welcome,' + res.user.email + '!');
            })
            .error(function (err) {
                console.log("bad");
                alert('warning', 'Opps!', 'Could not register');
            });
    };
}]);