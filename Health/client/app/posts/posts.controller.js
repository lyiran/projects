'use strict';


(function() {

  $('#j-posts-manage-tab a').click(function (e) {
    var $this = $(this);
    $this.parent().addClass('active').siblings().removeClass('active');
    e.preventDefault();
    return false;
  });


  class PostsController {
    constructor($http, $scope, socket) {
      // Use the User $resource to fetch all users
      // this.users = User.query();

      this.$http = $http;
      this.posts = [];

      $http.get('/api/posts').then(response => {
        this.posts = response.data;
        socket.syncUpdates('posts', this.posts);
      });

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('posts');
      });
    }

    switchTab (event) {
      console.log(this);
      console.log(event.target.addClass('active'));
      event.preventDefault();
      // event.target.parent().addClass('active');
      // $('#j-posts-manage-tab a').click(function (e) {
        // var $this = $(this);
        // $this.parent().addClass('active').siblings().removeClass('active');
        // event.preventDefault();
        // return false;
      // });
    }

    addPost () {
      if (this.newPost) {
        this.$http.post('/api/posts', { title: this.newPost });
        this.newPost = '';
      }
    }

    deletePost (post) {
      this.$http.delete('/api/posts/' + post._id);
    }

    // delete(user) {
    //   user.$remove();
    //   this.users.splice(this.users.indexOf(user), 1);
    // }
  }

  angular.module('healthApp.posts').controller('PostsController', PostsController);

})();
