'use strict';

angular.module('healthApp.user')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user', {
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        controllerAs: 'userc'
        // authenticate: 'user'
      });
  });
