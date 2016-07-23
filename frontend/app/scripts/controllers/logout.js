'use strict';

angular.module('jwtAuthApp')
    .controller('LogoutCtrl', function (authToken, $state) {
        authToken.removeToken();
        $state.go('main');
    });
