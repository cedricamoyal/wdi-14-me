console.log(document);

var bill = document.getElementById("bill");
console.log(bill);

var randomP = document.getElementById("randomPara");
console.log(randomP);

var listItems = document.getElementsByTagName("li");
console.log(listItems);

for (var i = 0; i < listItems.length; i++){
  var listItem = listItems[i];
  var newText = "List " + (i);
  // var text = listItem.innerHTML;
  // console.log(text);
  // listItem.innerHTML = newText;
}

var greatMovies = document.getElementsByClassName('movie');
console.log( greatMovies );

for (var i = 0; i < greatMovies.length; i++){
    var movieElement = greatMovies[i];
    var currentText = movieElement.innerHTML;
    var uppercaseText = currentText.toUpperCase();

    movieElement.innerHTML = uppercaseText;
}

var firstFood = document.querySelector("ol li");
console.log( firstFood.innerHTML);

var allFoods = document.querySelectorAll("ol li");
console.log( allFoods);

var showYahoo = function() {

var searchLink = document.querySelector( ".searchEngine");
console.log(searchLink);

searchLink.style.fontSize = "100px";

searchLink.href = "http://www.yahoo.com";
searchLink.className = "bestSearchEngine";
searchLink.innerHTML = "Search with Yahoo";

}

var emptyPage = function () {
  var bodyTag =  document.querySelector("body");
  console.log(bodyTag.innerHTML);

  bodyTag.innerHTML = "<h1>Hello</h1>";
  bodyTag.innerHTML += "<p>No soup for you</p>";
}


var bringBackTheLasagna = function () {
  // Create the element
  var newHeading = document.createElement("h2");
  // Then we create the text to go in the element
  var textForHeading = document.createTextNode("Lasagna");

  newHeading.style.fontFamily = "Comic Sans";
  newHeading.style.color = "purple";

  newHeading.appendChild(textForHeading);
  document.body.appendChild(newHeading);

};


var bringBackTheBill = function () {
  // Create the element
  var bill = document.createElement("img");

  var randomSize = (Math.random() +1)*400;
  randomSize = Math.round(randomSize);
  var imageURL = "http://fillmurray.com/";
  imageURL += randomSize;
  imageURL += "/";
  imageURL += randomSize;

  bill.src = imageURL;


  bill.style.border = "2px dashed black";
  bill.style.width = "175px";


  document.body.appendChild(bill);

};





var bodyElement = document.querySelector("body");
console.log(bodyElement.style);

bodyElement.style.background = "chartreuse";
bodyElement.style.fontFamily = "monospace";
bodyElement.style.textAlign = "center"
bodyElement.style.paddingTop = "100px";;










//
// <img src="https://s1.yimg.com/rz/d/yahoo_frontpage_en-AU_s_f_p_bestfit_frontpage_2x.png" height="48" alt="" id="yui_3_12_0_1_1462333713098_987">
//
//
// var logo = document.querySelector("#hplogo");
//
// logo;
// <div style=​"background-size:​272px 92px;​height:​92px;​width:​272px" title=​"Google" align=​"left" id=​"hplogo" onload=​"window.lol&&lol()​">​…​</div>​
//
// logo.style.backgroundImage = "url(https://s1.yimg.com/rz/d/yahoo_frontpage_en-AU_s_f_p_bestfit_frontpage_2x.png)";
//
// var searchButton = document.querySelector(".jsb input");
//
// searchButton;
// <input value=​"Google Search" aria-label=​"Google Search" name=​"btnK" type=​"submit" jsaction=​"sf.chk">​
//
// searchButton.value = "Yahoo !";
// "Yahoo !"
