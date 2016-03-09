'use strict';

angular.module('healthApp.admin')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        authenticate: 'admin'
      });
  });
