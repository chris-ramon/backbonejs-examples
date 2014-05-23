/*global DemoApp, $*/


window.DemoApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
      new this.Routers.Todo();
      Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    DemoApp.init();
});
