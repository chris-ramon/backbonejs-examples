ContactManager.module('ContactsApp.List', function(List, ContactManager) {
  List.Controller = {
    listContacts: function() {
      var contacts = ContactManager.request("contact:entities");
      var contactListView = new List.Contacts({collection: contacts});
      contactListView.on('itemview:contact:delete',
        function(childView, model) {
          contacts.remove(model);
        });
      contactListView.on('itemview:contact:highlighted',
        function(childView, model) {
          //console.log(model.escape('firstName') + ' was highlighted!!!');
        });
//      contactListView.on('itemview:contact:show',
//        function(childView, model) {
//          //delegates the event
//          ContactManager.ContactsApp.Show.Controller.showContact(model);
//        });
      ContactManager.contactsRegion.show(contactListView);
    }
  }
});