console.log("cedric");

var nick = document.querySelector(".nick");
var opacityTimer = null;

// Starting point for animation:
// to call css you use .style.something
// it will return a string, NOT a number. Even if we give it a number. 
nick.style.opacity = 1;



var makeNickFade = function () {

  console.log("Nick is leaving");

// nick.style.opacity is a string. parseFloat will make it a number (including decimal).
// parseInt works as well but will not show decimal.
  var currentOpacityValue = parseFloat(nick.style.opacity);

// to stop using window id stored in opacityTimer below
    if (currentOpacityValue <= 0 ) {
      window.clearInterval( opacityTimer);
      return;
    }

  var newOpacityValue = currentOpacityValue - 0.01;

  nick.style.opacity = newOpacityValue;
};

// when you want it
// window.setTimeout( makeNickFade, 2000);

// how often
// store the window number in opacityTimer (1 or 2 or 3 ...)
opacityTimer = window.setInterval( makeNickFade, 50);
