angular.module('myapp').controller('LogoutCtrl', function ($state, authToken) {
    authToken.removeToken();
    $state.go('main');
});