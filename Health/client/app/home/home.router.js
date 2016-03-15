'use strict';

angular.module('healthApp.home')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
        authenticate: 'home'
      });
  });
