'use strict';

angular.module('jwtAuthApp')
    .controller('HeaderCtrl', function ($scope, authToken) {
        $scope.isAuthenticated = authToken.isAuthenticated;
    });
