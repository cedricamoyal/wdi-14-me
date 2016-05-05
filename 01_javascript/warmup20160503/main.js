// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10


var gameObjectFactory = function (gameLetters, letterValue) {

    var gameObject = {};
    gameObject.gameLetters = gameLetters;
    gameObject.letterValue = letterValue;

    return gameObject;
};

var option1 = gameObjectFactory (["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"], 1);
var option2 = gameObjectFactory (["D", "G"], 2);
var option3 = gameObjectFactory (["B", "C", "M", "P"], 3);
var option4 = gameObjectFactory (["F", "H", "V", "W", "Y"], 4);
var option5 = gameObjectFactory (["K"], 5);
var option6 = gameObjectFactory (["J", "X"], 8);
var option7 = gameObjectFactory (["Q", "Z"], 10);

var arrayOfOPtions = [option1, option2, option3, option4, option5, option6, option7];



var gameFunction = function (strinGG) {

     var totalScore = 0;
     var strinGGArray = strinGG.split("");

     for (var i = 0; i < arrayOfOPtions.length; i++) {

        for (var j = 0; j < arrayOfOPtions[i].gameLetters.length; j++){

            for (var k = 0; k < strinGG.length; k++){

              if (strinGG[k] === arrayOfOPtions[i].gameLetters[j]) {
                totalScore += arrayOfOPtions[i].letterValue;
              }
            }
          }
       }
       return totalScore;
 }
