//
//
// var Book = Backbone.Model.extend({
//         defaults: {
//           title: "N/A",
//           subject: "Backbone",
//           pages: "N/A",
//           type: "Pdf"
//         },
//         initialize: function () {
//           console.log("new book created");
//         }
// });
//
//
// var pdfBook = new Book({
//   title: "A cool book",
//   pages: 123
// });
//
// var paperBook = new Book({
//   title: "Take me in the bus",
//   pages: 56,
//   type: "Paper"
// });
//
// var underscoreBook = new Book({
//   title: "Jeremy",
//   pages: 234,
//   subject: "Underscore"
// });
//
// var Library = Backbone.Collection.extend({
//   model: Book,
//
//   initialize: function () {
//     console.log("A new Library was created");
//
//     this.on("add", function (book) {
//       console.log( "A new book is available");
//       console.log(book.toJSON());
//     });
//     this.on("remove", function (book) {
//       console.log( "A book has been taken away");
//
//     });
//   }
// });
//
// var library = new Library([ pdfBook, paperBook]);
// library.add ( underscoreBook );
// library.add ( {
//   title: "Chart.js",
//   subject: "Data Visualisation",
//   pages: "345",
//   type: "Pdf"
// } );
//
// var bookTitle = pdfBook.get("title");
// console.log( bookTitle );
//
// var booksTitle = library.pluck("title");
// console.log( booksTitle );
//
// console.log( library.toJSON() );
// console.log( library.length );
//
// var sortByPages = library.sortBy("pages");
// console.log(sortByPages);
//
// library.each(function (book) {
//   console.log( book.get("type"));
// })
//
// console.log(library.length);
// library.remove(underscoreBook);
// console.log(library.length);
//
//
//
//
// console.log("##############################");
// /////////////////////////////////////////
//
//
// var Movie = Backbone.Model.extend({
//
//   defaults: {
//     name: "N/A",
//     director: "N/A",
//     plot: "N/A",
//     duration: "N/A"
//   },
//
//   initialize: function () {
//     console.log( "New movie created ");
//
//     this.on("change", function () {
//       console.log("Something changed");
//     });
//
//     this.on("change:name", function () {
//       var changedAttributes = this.previousAttributes();
//       var currentAttributes = this.toJSON();
//
//       console.log( "Name was changed from: " + changedAttributes.name );
//       console.log( "Name was changed from: " + this.get("name") );
//     });
//   }
// });
//
// var genericMovie = new Movie();
// var specificMovie = new Movie({name: "Satan"});
// console.log( genericMovie.toJSON(), specificMovie.toJSON());
//
// var newMovie = new Movie({
//   name: "Satantango",
//   duration: 450,
//   director: "Bela Tarr"
// });
//
// console.log(newMovie);
//
// // name:
// var movieName = newMovie.get("name");
// console.log( movieName );
//
// // Object
// var movieFull = newMovie.toJSON();
// console.log( movieFull );
//
// var anotherMovie = new Movie({
//   name: "Toy Story 3"
// });
// anotherMovie.set("spaceShip", 42);
// anotherMovie.set({
//   type: "animated",
//   madeBy: "Pixar"
// });
//
// console.log( anotherMovie.toJSON());
//
//
//
// var Movies = Backbone.Collection.extend({
//   model: Movie,
//
//   initialize: function () {
//     console.log("A new movies collection was created");
//   }
// });
//
// var movies = new Movies();
// movies.add({
//   name: "Finding Nemo",
//   rating: 3
// });
// console.log( movies.length );
//
//
// var aCollectionOf1 = new Movies(genericMovie);
// var aCollectionOf3 = new Movies([
//   specificMovie,
//    newMovie,
//   { name: "B@d Boy$2"}
// ]);
//
// console.log( aCollectionOf3 );
//
// var movieOne = {
//   name: "Movie One",
//   rating: 1
// };
//
// var movieTwo = {
//   name: "Movie Two",
//   rating: 2
// };
//
// var movieThree = {
//   name: "Movie Three",
//   rating: 3
// };
//
// movies.add([movieOne, movieTwo, movieThree]);
// console.log(movies.length);
//
// var ratingOfThree = movies.where({
//   rating: 3
// });
//
// var ratingOverThree = movies.filter( function (movie) {
//   return movie.get("rating") >= 3;
// })
//
// var sortedByRating = movies.sortBy("rating");
//
// console.log("ratingOfThree");
// console.log(ratingOfThree);
//
// console.log("ratingOverThree");
// console.log(ratingOverThree);
//
// console.log("sortedByRating");
// console.log(sortedByRating);
//
//
//
//
//
//
//
//
//
//
// console.log("##############################");
/////////////////////////////////////////


var Animal = Backbone.Model.extend({

  defaults: {
    type: "animal",
    ecosystem: "",
    stripes: 0,
    living: true
  },

  initialize: function () {

    this.on("change", function () {
      // console.log("Something just changed");
    });

    this.on("change:type", function () {
      // console.log( "The type changed");
    });

  }
  });

var genericAnimal = new Animal();
// console.log(genericAnimal.toJSON());

var kangaroo = new Animal();
var living = kangaroo.get("living");
// console.log(living);

kangaroo.set("type", "kangaroo");
kangaroo.set({
  pouch: true,
  tail: true
});

kangaroo.set("type", "Giant Kangaroo");

var kangarooAttrs = kangaroo.toJSON();
// console.log( kangarooAttrs );

var butterfly = new Animal({
  type: "Mona"
});

// console.log(butterfly.toJSON());

var badger = new Animal({
  type: "badger"
});

// console.log(badger.toJSON());

var panda = new Animal({
  type: "Panda",
  living: false,
  id: 10
});

// console.log(panda.toJSON());

var Zoo = Backbone.Collection.extend({
  model: Animal,

  initialize: function () {
    // console.log("A new zoo was created");

    this.on("add", function (animal) {
      // console.log( "new animal yeahhhhhhh");
      // console.log(animal.toJSON());
    });
    this.on("remove", function (animal) {
      // console.log( "a animal was remove");
        });
  }
});

var zoo = new Zoo([ kangaroo, butterfly, badger]);
zoo.add( panda );
zoo.add({
  type: "Fish",
  living: false
});
// console.log( zoo.toJSON() );
// console.log( zoo.length );

var deadAnimals = zoo.where({ living: false });
// console.log( deadAnimals );

zoo.remove( deadAnimals);

// console.log( zoo.length );

var donaldTrump = new Animal({
  type: "moron"
});

zoo.add ( donaldTrump );
zoo.remove( donaldTrump );

var donaldTrumpS = zoo.where({ type: "moron" });
// console.log( donaldTrumpS.length );

var remainingAnimals = zoo.pluck("type");
// console.log("remainingAnimals:");
// console.log(remainingAnimals);

var ZooView = Backbone.View.extend({
    // tagName: "div" - would create an element
    el: "#app", // existing div

    events: {
      'click h1': 'headerClick',
      'click li': 'accessAnimal'

    },

    accessAnimal: function () {
      alert("This section of the Zoo is closed");
    },

    headerClick: function (e) {
      var $clickedElement = $( e.currentTarget );
      $clickedElement.fadeToggle();
    },

    render: function (){

      //because we defined the el property, we now have access to this.el (document.getElementById('app')), we also have to the jQuery selected version of it using this.$el($("#app"))

      this.$el.append('<h1>Yay, we just bought a zoo</h1>');
      var $ul = $("<ul></ul>");

      this.collection.each(function (animal) {
        var $li = $("<li></li>");
        $li.text( animal.get("type"));
        $ul.append( $li );
      });

      this.$el.append($ul)

    }

});

var Router = Backbone.Router.extend({
  routes: {
    '': 'showZoo',
    'secret': 'showSecret'
  },

  showSecret: function () {
    $("#app").html('I put bleach in your coffee');
    $("#app").append("<a href='#'>Go home</a>");
  },

  showZoo: function (){
    $("#app").html('');
    var zv = new ZooView({
      collection: zoo
    });
    zv.render();
  }

});


$(document).ready(function () {
  var router = new Router ();
  Backbone.history.start();

})






console.log("#######################");
/////////////////////////////////////////////
//
//
// var Car = Backbone.Model.extend({
//         defaults: {
//           wheels: 4,
//           steeringWheel: true
//         },
//         initialize: function () {
//           console.log("new car created");
//         }
// });
//
//
// var jag = new Car({
//   year: 1964,
//   type: "E-type"
// });
//
// var galaxy = new Car({
//   year: 1962,
//   type: "Ford Galaxy"
// });
//
// var galaxy = new Car({
//   year: 1962,
//   type: "Ford Galaxy"
// });
//
// var Dealership = Backbone.Collection.extend({
//   model: Car,
//
//   initialize: function () {
//     console.log("A new Dealership was created");
//
//     this.on("add", function (car) {
//       console.log( "new car, sell it");
//       console.log(car.toJSON());
//     });
//     this.on("remove", function (car) {
//       console.log( "a car was sold");
//
//     });
//   }
// });
//
// var dealership = new Dealership([ jag, galaxy,{year: 1965, type: "XP"}]);
// dealership.add ( {year: 1968, type: "XP8"} );
//
//
// console.log( dealership.toJSON() );
// console.log( dealership.length );
//
// var sortByYear = dealership.sortBy("Year");
// console.log(sortByYear);
//
// dealership.each(function (car) {
//   console.log( car.get("type"));
// })
//
// console.log(dealership.length);
// dealership.remove(jag);
// console.log(dealership.length);
