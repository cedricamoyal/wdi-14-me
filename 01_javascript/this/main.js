// "Global binding" || "Default binding"

console.log("Hello this !!");

var showThis = function () {
  console.log("this is this", this);

};

showThis();

// "implicit binding"

var person = {
     name: "Groucho",
     speak: function () {
      //  console.log( this );
       console.log( "I am not " + this.name);
     }

};

person.speak();

var Serge = {
  respondsTo: function (question){
    if (Serge.isSilent( question )){
      console.log( "Speak up");
    }

  },
  isSilent: function (question) {
    return question.trim() === "";
  }

};

Serge.respondsTo("  ");
