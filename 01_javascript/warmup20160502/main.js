// Serge Responds
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// To call the function, we want to be able to do something like
// this - Serge.respondTo( "Some string here" )
//
// What do you need to do?
//
// Make your HTML and JS files
// Make sure you work with an object to get this working - remember to keep your
//  functions small!
// Figure out the appropriate response
// If you are flying through, do something cool with the CSS or work more on the
//  homework from last night

var sergeRespond = function (strinGG){

    if (strinGG.endsWith("?")) {
      console.log("Sure");
    }

    else if (strinGG === strinGG.toUpperCase()) {
      console.log("Woah, chill out!");
    }

    else if (strinGG === "") {
      console.log("Fine. Be that way!");
    }

    else {
      console.log("Whatever.");
    }






}
