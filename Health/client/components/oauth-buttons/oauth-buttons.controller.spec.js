'use strict';

describe('Controller: OauthButtonsCtrl', function() {

  // load the controller's module
  beforeEach(module('healthApp'));

  var OauthButtonsCtrl, $window;

  // Initialize the controller and a mock $window
  beforeEach(inject(function($controller) {
    $window = {
      location: {}
    };

    OauthButtonsCtrl = $controller('OauthButtonsCtrl', {
      $window: $window
    });
  }));

  it('should attach loginOauth', function() {
    OauthButtonsCtrl.loginOauth.should.be.a('function');
  });
});
