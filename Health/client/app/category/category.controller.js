'use strict';

(function() {

class CategoryController {
  constructor($http, $scope, socket) {
    // Use the User $resource to fetch all users
    // this.users = User.query();

    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('things');
    });
  }

  addThing () {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing (thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

  // delete(user) {
  //   user.$remove();
  //   this.users.splice(this.users.indexOf(user), 1);
  // }
}

angular.module('healthApp.category')
  .controller('CategoryController', CategoryController);

})();
