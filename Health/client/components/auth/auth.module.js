'use strict';

angular.module('healthApp.auth', [
  'healthApp.constants',
  'healthApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
