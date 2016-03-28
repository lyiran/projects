
'use strict';

$(function () {

  var managePosts = {};

  managePosts.init = function () {
    this.switchTab();
  };

  managePosts.switchTab = function () {
    var tabWrapper = $('#j-posts-manage-tab');
    var tabNavs = tabWrapper.find('.nav a');
    var tabPane = tabWrapper.find('.tab-pane');
    console.log(tabWrapper.length);

    tabNavs.click(function () {
      var $this = $(this);
      $this.parent().addClass('active').siblings().removeClass('active');
      tabPane.eq($this.index()).addClass('active').siblings().removeClass('active');
    });
  };

  managePosts.init();

});
