console.log("Cedric");

var nick = document.querySelector(".nick");
var widthTimer;


// nick.setAttribute("width", "200");
nick.style.width = "200px";

var makeImageBigger = function () {
  //Get current width
  var currentWidth = parseFloat( nick.style.width );

  if (currentWidth > 400) {
    window.clearInterval(widthTimer)
  }

  console.log(widthTimer);

  //Add ten to it
  var newWidth = currentWidth + 10 + "px";

  //Then change the width yo be the new value
  nick.style.width = newWidth;
};

// set a timer
widthTimer =  window.setInterval(makeImageBigger, 100);
