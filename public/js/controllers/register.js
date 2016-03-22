angular.module('myapp').controller('RegisterCtrl', ['$scope', '$http', 'alert', function ($scope, $http, alert) {
    $scope.submit = function () {
        var url = '/';
        var user = {};
        $http.post(url, user)
            .success(function (res) {
                console.log("good");
                alert('success', 'OK!', 'You are now registered');
            })
            .error(function (err) {
                console.log("bad");
                alert('warning', 'Opps!', 'Could not register');
            });
    };
}]);