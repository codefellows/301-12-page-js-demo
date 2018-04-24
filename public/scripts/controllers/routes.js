'use strict';

// This is where we define the client-side routes

// page(route, callback to execute when this route is hit);

page('/', homeView.init);
page('/about', aboutView.init);
page('/contacts', contactsView.init);

page();