'use strict';

class SidebarController {
  //start-non-standard
  // menu = [
    // {
    //   'title': 'Home',
    //   'link': '/'
    // },
    // {
    //   'title': 'Dashboard',
    //   'link': '/dashboard'
    // }
  // ];

  // isCollapsed = true;
  //end-non-standard

  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('healthApp')
  .controller('SidebarController', SidebarController);
