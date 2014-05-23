ContactManager.module("ContactsApp.List.Templates",
  function(Templates, ContactManager, Backbone, Marionette, $, _){
    Templates.contactView = [
      "<h1><%= firstName %> <%= lastName %></h1>",
      "<p>",
      "<strong>Phone number:</strong><span><%= phonenumber %></span>",
      "</p>"
    ].join("\n"); });