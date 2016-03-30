'use strict';

angular.module('healthApp.posts')
  .config(function($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsController',
        controllerAs: 'posts',
        authenticate: 'posts'
      })
      .when('/posts/add', {
        templateUrl: 'app/posts/posts_add.html',
        controller: 'PostsController',
        controllerAs: 'posts',
        authenticate: 'posts'
      });
  });
