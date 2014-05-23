/*global DemoApp, Backbone*/

DemoApp.Collections = DemoApp.Collections || {};

(function () {
    'use strict';

    DemoApp.Collections.Todo = Backbone.Collection.extend({
      url: 'http://0.0.0.0:3000/todos',

      model: DemoApp.Models.Todo,
      
      parse: function(data) {
        return data.todos;
      }

    });

})();
