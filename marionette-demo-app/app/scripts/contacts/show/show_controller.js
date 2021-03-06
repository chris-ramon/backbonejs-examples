ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone,Marionette,$,_){
  Show.Controller = {
    showContact: function(id) {
      var contacts = ContactManager.request('contact:entities');
      var model = contacts.get(id);
      var contactView = new Show.Contact({model: model});
      // if there is a view within the region
      // Marionette will handle closing the current view.
      ContactManager.contactsRegion.show(contactView);
    }
  }
});