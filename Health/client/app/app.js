'use strict';

angular.module('healthApp', [
  'healthApp.auth',
  'healthApp.home',
  'healthApp.category',
  'healthApp.posts',
  'healthApp.user',
  'healthApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
