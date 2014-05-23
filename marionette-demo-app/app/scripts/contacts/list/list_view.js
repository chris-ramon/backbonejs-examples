ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone,Marionette,$,_){
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#contact-template',
    events: {
      'click .showAlert': 'showAlert',
      'click .hasPhone': 'showHasPhoneAlert',
      'click': 'highLightRow',
      'click button.js-delete': 'deleteContact',
      'click a.js-show': 'showContact'
    },
    showAlert: function(e){ alert(this.model.escape('defaultText'));  },
    showHasPhoneAlert: function() {
      if(!this.model.escape('phoneNumber')) {
        alert('No phone number!');
      } else { alert('has phone number!!! yuhuuuu')  }
    },
    highLightRow: function() {
      this.$el.toggleClass('warning');
      // TODO: iterate efficiently throw all the siblings
      // and remove warning.

      this.trigger("contact:highlighted", this.model);
    },
    deleteContact: function(e) {
      // if we want to stop propagation of specific
      // events, we should use pub/sub pattern instead.
      e.stopPropagation();

      // marionette handles the dom remove, unbind listeners
      // views only display things
      // we should delegate this data related event
      // to the controller.
      //this.model.collection.remove(this.model);

      this.trigger("contact:delete", this.model);
    },
    remove: function(){
      // will only hide the element, but won't delete the dom
      // this.$el.fadeOut();

      var self = this; this.$el.fadeOut(function(){
        Marionette.ItemView.prototype.remove.call(self);
      });
    },
    showContact: function(e) {
      e.preventDefault();
      e.stopPropagation();
      ContactManager.trigger('contact:show', this.model.escape('id'));
    }
  });
  List.Contacts = Marionette.CompositeView.extend({
    tagName: "table", // instead of defaut div
    itemView: List.Contact,
    template: '#contact-list',
    itemViewContainer: "tbody",
  });
});