/*global DemoApp, Backbone, JST*/

DemoApp.Views = DemoApp.Views || {};

(function () {
    'use strict';

    DemoApp.Views.TodoList = Backbone.View.extend({
        el: '#main',

        template: JST['app/scripts/templates/todoList.ejs'],

        events: {
          'keyup input': 'addTodo'
        },

        addTodo: function(e) {
          if(e.keyCode != 13) { return; }
          var todo = new DemoApp.Models.Todo({text: this.todoInput.val()});
          this.collection.add(todo);
          this.renderTodo(todo);
          this.clearTodoInput();
        },

        initialize: function () {
          this.render();
          this.todoInput = this.$('input');
          this.collection.fetch({parseModel: false});
          this.listenTo(this.collection, 'sync', this.renderTodos);
        },

        render: function() {
          this.$el.html(this.template());
        },

        renderTodos: function () {
          this.collection.each(function(item) {
            this.renderTodo(item);
          }, this);
        },

        renderTodo: function(item) {
          var todoView = new DemoApp.Views.TodoView({model: item});
          this.$el.append(todoView.render().el); // we use append to add each todo
        },

        clearTodoInput: function() {
          this.todoInput.val('');
        }
    });

})();
