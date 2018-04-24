'use strict';

// This is where we define the view for the "Home" page, in other words, the default view

(function(module) {
  const homeView = {};
  console.log('YO HOME VIEW from outside the route handler');

  homeView.init = function() {
    console.log('INSIDE HOMEVIEW INIT');
    $('#contacts').empty();
    $('body').css('background-color', 'blue');
    $('#content').text('Hello world, from the Home page!!!').css('color', 'white');
  }

  module.homeView = homeView;
})(window);