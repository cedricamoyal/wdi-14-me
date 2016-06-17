var app = app || {};

app.SecretInputView = Backbone.View.extend({

  events: {
    'click button': 'createSecret',
    'keydown textarea': 'checkForEnter'
  },

  checkForEnter: function () {
    app.ENTER_KEY = 13;
    if ( event.which === app.ENTER_KEY ){
      event.preventDefault(); // Don't create a new line
      this.createSecret(); // Create a secret
    }

  },

  createSecret: function () {
    console.log("A secret should be created");
    var secret = new app.Secret();
    var userContent = this.$el.find("textarea").val();
    secret.set({
      content: userContent
    });
    secret.save();
    app.secrets.add(secret);
    this.$el.find("textarea").val('').focus();

  },

  el: "#secretForm",

  render: function(){
    // console.log("SecretInputView view should be rendered now", this);
    var secretInputViewTemplate = $("#secretInputViewTemplate").html();
    this.$el.html( secretInputViewTemplate );
  }

});
