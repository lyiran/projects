'use strict';

(function () {

  class DashboardController {
    constructor ($http, $scope, socket) {
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

  }

  angular.module('healthApp')
    .controller('DashboardController', DashboardController);

})();
