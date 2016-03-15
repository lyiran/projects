'use strict';

angular.module('healthApp.home')
  .config(function($routeProvider) {
    $routeProvider
      .when('/category', {
        templateUrl: 'app/category/category.html',
        controller: 'CategoryController',
        controllerAs: 'category',
        authenticate: 'category'
      });
  });
