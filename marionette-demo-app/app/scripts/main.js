var ContactManager = new Marionette.Application();

// Regions
ContactManager.addRegions({
  contactsRegion: '#contacts-region',
  mainRegion: "#main-region",
  itemsRegion: '#items'
});



ContactManager.on("initialize:after", function(){
  if(Backbone.history) {
    Backbone.history.start();

    if(Backbone.history.fragment === '') {
      Backbone.history.navigate("contacts");
      ContactManager.ContactsApp.List.Controller.listContacts();

      // we can achieve the same result, but is not recommended
      // details: http://lostechies.com/derickbailey/2011/08/28/dont-execute-a-backbone-js-route-handler-from-your-code/
      // Backbone.history.navigate("contacts", {trigger: true});
    }
  }
});
