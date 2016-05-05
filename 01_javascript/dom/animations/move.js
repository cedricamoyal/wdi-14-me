var nick = document.querySelector(".nick");

//Starting style attributes
nick.style.top ="0px";
nick.style.left ="0px";
var leftTimer = null;

var makeNickMove = function () {

// change string to number:
    var currentLeftValue = parseFloat( nick.style.left );

// for the image to stop at the end of the screen
    if (currentLeftValue > window.innerWidth - 200) {
// for the image to goback to the beginning
      nick.style.left ="0px";
      return;

    }

    var newLeftValue = currentLeftValue + 5;
// add unity to a number:
    nick.style.left = newLeftValue + "px";
};

leftTimer = window.setInterval( makeNickMove, 50);

// use window.innerWidth and window.innerHeight to no the size of the screen
