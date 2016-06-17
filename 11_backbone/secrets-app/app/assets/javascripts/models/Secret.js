// Scoping:
var app = app || {};

app.Secret = Backbone.Model.extend({

  urlRoot: "/secrets",

  defaults: {
    content: ""
  },

  initialize: function () {
    console.log( "A new secret was created");
  }
});
