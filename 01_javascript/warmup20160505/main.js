// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
//
// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
//
// Shortest intro to biochemistry EVAR:
//
// twigs are to birds nests as
// nucleotides are to DNA and RNA as
// amino acids are to proteins as
// sugar is to starch as
// oh crap lipids
// I'm not going to talk about lipids because they're crazy complex.
//
// So back to nucleotides.
//
// There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.
//
// There are no other nucleotides.
//
// Make sure that you validate it has nucleotides!
//
// Find how many of each nucleotides are in a string that you pass in to a function
console.log("Hello Tennis");

var nucleoArray = ["A", "C", "G", "T"];
var nucleoArray2 = ["A", "C", "G", "U"];

var nucleoFunction = function (strinGG) {
  var newStrinGG = strinGG.toUpperCase();
  var strinGGArray = newStrinGG.split("");
  var howManyNucleo = 0;
  var messageN = "";

  var howManyNucleo2 = 0;
  var messageN2 = "";

  for (var i = 0; i < strinGGArray.length; i++) {

        for (var j = 0; j < nucleoArray.length; j++){

            if (strinGGArray[i] === nucleoArray[j]) {
              howManyNucleo += 1;
              messageN += nucleoArray[j] + ", ";
            }
        }
  }

  for (var i = 0; i < strinGGArray.length; i++) {

        for (var j = 0; j < nucleoArray2.length; j++){

            if (strinGGArray[i] === nucleoArray2[j]) {
              howManyNucleo2 += 1;
              messageN2 += nucleoArray2[j] + ", ";
            }
        }
  }
  console.log("Message 1 = " + messageN);
  console.log("Message 2 = " + messageN2);
  return howManyNucleo + " and " + howManyNucleo2;
}
