/*global DemoApp, Backbone, JST*/

DemoApp.Views = DemoApp.Views || {};

(function () {
    'use strict';

    DemoApp.Views.TodoDetail = Backbone.View.extend({
        el: '#main',

        template: JST['app/scripts/templates/todoDetail.ejs'],

        events: {},

        initialize: function () {
          this.model.fetch();
          this.listenTo(this.model, 'sync', this.render);
        },

        render: function () {
          this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
