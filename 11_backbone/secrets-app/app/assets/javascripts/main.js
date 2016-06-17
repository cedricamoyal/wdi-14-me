// var s1 = new app.Secret();
// var s2 = new app.Secret({
//   content: "I put bleach in your coffee"
// });
//
// var secretsCollection = new app.Secrets([
//   s1,
//   s2
// ]);



// // Add all the existing Models to the collection.
// // When it is done, console.log that:
// secretsCollection.fetch().done(function () {
//   console.log( secretsCollection.toJSON() );
//
//
// var firstSecret = secretsCollection.findWhere({
//   id: 1
// });
//
// firstSecret.set({
//   content: "I put bleach in your coffee"
// });
//
// firstSecret.save().done(function () {
//   console.log("Secret saved")
// });
//
// });

app.secrets = new app.Secrets();

$(document).ready(function () {

  app.router = new app.AppRouter();
  Backbone.history.start();

  app.secrets.fetch();

  window.setInterval(function () {
    app.secrets.fetch();
  }, 3000);

});
