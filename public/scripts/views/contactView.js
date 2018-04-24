'use strict';

// This is where we define the view for the "Contact" page

// This is where we define the view for the "Contact" page

(function(module) {
  const contactsView = {};
  console.log('YO CONTACT VIEW from outside the route handler');

  contactsView.init = function() {
    console.log('INSIDE CONTACTVIEW INIT');
    $('#contacts').empty();
    $('body').css('background-color', '#ddd');
    $('#content').text('This is the dadgum Contacts page!!!').css('color', 'purple');
    $.getJSON('./scripts/models/contact.json')
      .then(function(data) {
        console.log(data);
        data.forEach(function(contact) {
          var liEl = document.createElement('li');
          liEl.innerHTML = `${contact.name} has the ID number of ${contact.id} and a favorite number of ${contact['favorite number']}.`;
          $(liEl).attr('data-ninja', contact.ninja);
          $('#contacts').append(liEl);
        });
      }, function(err) {
        console.error(err);
      });
  }

  module.contactsView = contactsView;
})(window);