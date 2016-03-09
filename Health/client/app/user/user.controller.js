'use strict';

(function () {

  class UserController {
    constructor (User) {
      this.users = User.query();
    }

    delete (user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }
  }

  angular.module('healthApp.user')
    .controller('UserController', UserController);

})();
