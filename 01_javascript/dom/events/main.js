

var myButton = document.querySelector("#myTestButton");

  myButton.addEventListener("click", function () {
    console.log("The button was clicked");
    //document.body.style.background = "hotpink";
  });

// Better way of doing the same thing:
  var myHeading = document.querySelector("h1");
  var myCallback = function () {
    console.log("The heading was clicked");
  };
  myHeading.addEventListener("click", myCallback);
  // if you want the action (click) to happen only once you add the line below:
  // myHeading.removeEventListener("click", myCallback);


// Bill events:
  // var bill = document.querySelector(".bill");
  // var billsCallback = function () {
  //   console.log("Bill rang back");
  // };
  // bill.addEventListener("click", billsCallback);

  var bill = document.querySelector(".bill");
  var billsCallback = function (event) {
    var newParagraph = document.createElement("p");
    var paragrapheText = document.createTextNode("Missed called " + event.timeStamp);

    newParagraph.appendChild(paragrapheText);
    document.body.appendChild(newParagraph);
  };

  bill.addEventListener("click", billsCallback);

// var thisShouldHappenRegularly = function () {
//   console.log("This just happened. But that this is the wrong this");
// };
//
// window.setInterval(whatToDo, delay);
//
//   window.setInterval(thisShouldHappenRegularly, 10000);

var thisShouldBeDelayed = function () {
   console.log("This should happen a little while after the page is loaded");
 };
 window.setTimeout(thisShouldBeDelayed, 2000);
