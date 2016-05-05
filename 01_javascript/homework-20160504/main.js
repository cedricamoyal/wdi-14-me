console.log("Cedric");

var nick = document.querySelector(".theCat");
var widthTimer;


// nick.setAttribute("width", "200");
nick.style.left = "200px";

var makeImageBigger = function () {
  //Get current width
  var currentWidth = nick.style.left;

  if (currentWidth > 1400) {
    window.clearInterval(widthTimer)
  }

  console.log(widthTimer);

  //Add ten to it
  var newWidth = parseFloat(currentWidth) + 10 + "px";

  //Then change the width yo be the new value
  nick.style.left = newWidth;
};

// set a timer
widthTimer =  window.setInterval(makeImageBigger, 50);
