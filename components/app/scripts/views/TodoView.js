/*global DemoApp, Backbone, JST*/

DemoApp.Views = DemoApp.Views || {};

(function () {
    'use strict';

    DemoApp.Views.TodoView = Backbone.View.extend({

        template: JST['app/scripts/templates/TodoView.ejs'],
        todoFormTemplate: JST['app/scripts/templates/todoForm.ejs'],


        tagName: 'div', //wrapper

        id: 'prueba',

        className: 'yo',

        events: {
          'click .edit': 'editTodo',
          'click .save': 'saveTodo'
        },

        editTodo: function() {
          this.renderTodoForm();
        },

        saveTodo: function(e) {
          e.preventDefault();
          this.model.set({text: this.$('.todoInput').val()}); //
          this.render();
        },

        initialize: function () {
        },

        render: function () {
          // why does toJSON returns empty object, if this.model is a child from DemoApp.Collections.Todo
          //console.log(this.model); // {}
          this.$el.html(this.template({todo: this.model.toJSON()}));
          return this;
          // if we use this.model.toJSON, at template we will access attributes as key/value, instead of access to the object.

        },
      
        renderTodoForm: function() {
          this.$el.empty();
          this.$el.html(this.todoFormTemplate({todo: this.model.toJSON()}));
        }

    });

})();
