'use strict';

// This is where we define the view for the "About" page

(function(module) {
  const aboutView = {};
  console.log('YO ABOUT VIEW from outside the route handler');

  aboutView.init = function() {
    console.log('INSIDE ABOUTVIEW INIT');
    $('#contacts').empty();
    $('body').css('background-color', 'yellow');
    $('#content').text('This is the dadgum About page!!!').css('color', 'green');
  };

  module.aboutView = aboutView;
})(window);