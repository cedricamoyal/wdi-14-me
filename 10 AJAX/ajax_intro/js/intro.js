console.log("Hello CEdric")

// 1 result:

// request could be any word
// This creates a new object that we can use to make an AJAX request:
var request = new XMLHttpRequest ();

request.onreadystatechange = function () {
  console.log( "State is: " + request.readyState );
  if ( request.readyState !== 4 ){
    return;
  }
  var dataAsString = request.responseText;
  var dataAsObject = JSON.parse( dataAsString );

  newH1 = document.createElement("h1");

  h1Text = document.createTextNode(dataAsObject.Title);

  newH1.appendChild(h1Text);
  document.body.appendChild(newH1);

  // var name = document.querySelector(".name");
  // name.innerHTML = dataAsObject.Title;

  var myH1 = document.querySelector("h1");

    myH1.addEventListener("click", function () {
      var dataAsString = request.responseText;
      var dataAsObject = JSON.parse( dataAsString );

        var pTextYear;
        var newPYear;
        newPYear = document.createElement("p");
        pTextYear = document.createTextNode(dataAsObject.Year);
        newPYear.appendChild(pTextYear);
        document.body.appendChild(newPYear);

        var pTextRuntime;
        var newPRuntime;
        newPRuntime = document.createElement("p");
        pTextRuntime = document.createTextNode(dataAsObject.Runtime);
        newPRuntime.appendChild(pTextRuntime);
        document.body.appendChild(newPRuntime);

        var pTextPlot;
        var newPPlot;
        newPPlot = document.createElement("p");
        pTextPlot = document.createTextNode(dataAsObject.Plot);
        newPPlot.appendChild(pTextPlot);
        document.body.appendChild(newPPlot);

    });

  console.log( dataAsObject );
};

var getFromInput1;
var getFromInput2;
// console.log( request.readyState );

window.onload = function () {
  var btn = document.querySelector(".result1");
  btn.addEventListener("click", function (){

    var divContent = document.querySelector("#content");
    divContent.innerHTML = "";

    console.log("The button was clicked");
    // Get the value of the input
    getFromInput1 = document.querySelector("input").value;
    // Make a new AJAX request: see below

    // Fire off our request:
    request.open( "GET", "http://omdbapi.com?t=" + getFromInput1);
    request.send();

      // Figure out the URL:
            // For a single result: http://omdbapi.com?t=Satantango
            // For a list of results: http://omdbapi.com?s=Jaws
  });

  var btnList = document.querySelector(".listOfResult");
  btnList.addEventListener("click", function (){

    var divContent = document.querySelector("#content");
    divContent.innerHTML = "";
    
    console.log("The button was clicked");
    // Get the value of the input
    getFromInput2 = document.querySelector("input").value;
    // Make a new AJAX requestList: see below

    // Fire off our requestList:
    requestList.open( "GET", "http://omdbapi.com?s=" + getFromInput2);
    requestList.send();

      // Figure out the URL:
            // For a single result: http://omdbapi.com?t=Satantango
            // For a list of results: http://omdbapi.com?s=Jaws

      // Represent the data on the page
  });





};

///////////////////////////////////////

// a list of results:

var dataAsStringList;
var dataAsObjectList;
var newH3;
var h3Text;
var pTextYear;
var newPYear;
var newH3Details;

// request could be any word
// This creates a new object that we can use to make an AJAX request:
var requestList = new XMLHttpRequest ();

requestList.onreadystatechange = function () {
  console.log( "State is: " + requestList.readyState );
  if ( requestList.readyState !== 4 ){
    return;
  }
  dataAsStringList = requestList.responseText;
  dataAsObjectList = JSON.parse( dataAsStringList );
  // var nameList = document.querySelector(".name");

  for (var i =0; i < dataAsObjectList.Search.length; i++){

    newH3 = document.createElement("h3");
    newH3.className = "allNewH3 newH3"+i;
    h3Text = document.createTextNode(dataAsObjectList.Search[i].Title);

    newH3.appendChild(h3Text);
    document.body.appendChild(newH3);

  };


newH3Details = document.querySelector(".allNewH3");
newH3Details.addEventListener("click", function () {
  console.log("The newH3Details was clicked");

        for (var i = 0; i < dataAsObjectList.Search.length; i++){

          if (newH3Details.className = "newH3"+i) {

            newPYear = document.createElement("p");
            pTextYear = document.createTextNode("Year is: " + dataAsObjectList.Search[i].Year);
            newPYear.appendChild(pTextYear);
            document.body.appendChild(newPYear);

          }
          };
          });

  console.log( dataAsObjectList );
};

// var btn34 = document.querySelector("h3");
// btn34.addEventListener("click", function (){
//   console.log("The button was clicked");
//
// });
