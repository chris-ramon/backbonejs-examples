/*global DemoApp, Backbone, JST*/

DemoApp.Views = DemoApp.Views || {};

(function () {
    'use strict';

    DemoApp.Views.TodoCommentsView = Backbone.View.extend({

        template: JST['app/scripts/templates/TodoCommentsView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
