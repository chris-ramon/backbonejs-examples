/*global DemoApp, Backbone, JST*/

DemoApp.Views = DemoApp.Views || {};

(function () {
    'use strict';

    DemoApp.Views.TodoView = Backbone.View.extend({

        template: JST['app/scripts/templates/TodoView.ejs'],

        tagName: 'div', //wrapper

        id: 'prueba',

        className: 'yo',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
          // why does toJSON returns empty object, if this.model is a child from DemoApp.Collections.Todo
          console.log(this.model.toJSON()); // {}
          this.$el.html(this.template({todo: this.model.toJSON()}));
          return this;



          // if we use this.model.toJSON, at template we will access attributes as key/value, instead of access to the object.

        }

    });

})();
