/*global DemoApp, Backbone*/

DemoApp.Routers = DemoApp.Routers || {};

(function () {
    'use strict';

    DemoApp.Routers.Todo = Backbone.Router.extend({
      routes: {
        '': 'showIndex',
        'todo/:id': 'todoDetail',
        'todo/edit/:id': 'todoEdit'
      },

      showIndex: function() {
        new DemoApp.Views.TodoList({
          collection: new DemoApp.Collections.Todo()
        });
      },

      todoDetail: function(todoId) {
        new DemoApp.Views.TodoDetail({
          model : new DemoApp.Models.Todo({id: todoId})
        });
      },

      todoEdit: function(todoId) {
        var todo = c.get({id: parseInt(todoId)});
        new DemoApp.Views.TodoEditView({
          model: todo
        })
      }
    });

})();
