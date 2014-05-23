/*global DemoApp, Backbone, JST*/

DemoApp.Views = DemoApp.Views || {};

(function () {
    'use strict';

    DemoApp.Views.TodoList = Backbone.View.extend({
        el: '#main',

        template: JST['app/scripts/templates/todoList.ejs'],

        events: {
          'keypress input': 'addTodo'
        },

        addTodo: function() {
          this.collection.add({text: 'yooo'});
        },

        initialize: function () {
          this.collection.fetch();
          this.listenTo(this.collection, 'sync', this.render);
          //this.listenTo(this.collection, 'add', this.render); // special care with listenTo, because events could come wherever
          //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
//          this.$el.html(this.template());
          this.collection.each(function(item) {
            this.renderTodo(item);
          }, this);
        },

        renderTodo: function(item) {
          var todoView = new DemoApp.Views.TodoView({model: item});
          this.$el.append(todoView.render().el); // we use append to add each todo
        }

    });

})();
