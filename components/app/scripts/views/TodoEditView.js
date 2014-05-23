/*global DemoApp, Backbone, JST*/

DemoApp.Views = DemoApp.Views || {};

(function () {
    'use strict';

    DemoApp.Views.TodoEditView = Backbone.View.extend({
        el: '#main',

        template: JST['app/scripts/templates/TodoEditView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
          this.render();
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
           this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
