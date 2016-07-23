'use strict';

angular.module('jwtAuthApp')
    .controller('RegisterCtrl', function ($scope, $http, authToken, API_URL) {

        $scope.submit = function () {

            var url = API_URL + 'register';
            var user = {
                email: $scope.email,
                password: $scope.password
            };
            $http.post(url, user)
                .success(function (res) {
                    console.log('good');
                    authToken.setToken(res.token);
                })
                .error(function (err) {
                    console.log('bad');
                });
        }
    });
