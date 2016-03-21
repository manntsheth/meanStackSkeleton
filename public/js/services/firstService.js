angular.module('firstService', []).factory('serviceone', ['$http', function ($http) {
    var factory = {
        get: function () {
            return $http.get('/somethingels');
        },
        create: function (data) {
            console.log('inside service method data ' + JSON.stringify(data));
            return $http.post('/', data);
        },
        delete: function (id) {
            return $http.delete('/api/nerds/' + id)
        }
    };

    return factory;

}]);