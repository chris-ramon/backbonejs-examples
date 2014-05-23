/*global DemoApp, Backbone*/

DemoApp.Models = DemoApp.Models || {};

(function () {
    'use strict';

    DemoApp.Models.Todo = Backbone.Model.extend({

      urlRoot: 'http://0.0.0.0:3000/todos',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(r, options)  {
          return r.todo;
        }
    });

})();
