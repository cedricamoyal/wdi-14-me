// Add a script tag to the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var bodyElement = document.querySelector("body");

bodyElement.style.fontFamily = "Arial";
bodyElement.style.color = "green";

var nicknameN = document.querySelector("#nickname");
nicknameN.innerHTML = "Cedric";

var favoritesF = document.querySelector("#favorites");
favoritesF.innerHTML = "Butterflies";

// hometown is an object and .innerHTML a key of the hometown object
var hometownH = document.querySelector("#hometown");
hometownH.innerHTML = "Paris";


// allList is an array of objects and .style a key of the object allList[i] the hometown object

var allList = document.querySelectorAll("span");

for (var i = 0; i < allList.length; i++){
  allList[i].style.color = "red";
}

  var cedricC = document.createElement("img");
  cedricC.src = "http://fillmurray.com/200/200"
  document.body.appendChild(cedricC);


  //////////////////////////////////
