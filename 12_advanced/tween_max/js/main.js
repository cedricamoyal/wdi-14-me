var t1;

$(document).ready(function () {
  var $bill = $("img");
  t1 = TweenMax.to($bill, 3, {
    left: "80vw",
    top: Math.random() > 0.5 ? "80vh" : "0vh",
    ease: Bounce.easeOut,
    yoyo: true,
    rotation: 360,
    repeat: -1, // infinitly
    onUpdate: function () {
      // console.log("Animation is happening");
    }
  });

  $(".reverse").on("click", function () {
    t1.reverse();
  });
  $(".pause").on("click", function () {
    t1.pause();
  });
  $(".play").on("click", function () {
    t1.play();
  });
  $(".doubleSpeed").on("click", function () {
    t1.timeScale( 20 );
  });

  $(".seek").on("input change", function () {
        var currentVal = parseInt( $(this).val() );
        t1.pause();
        t1.seek( currentVal );
      });

  $(".speed").on("change", function () {
        var currentVal = parseInt( $(this).val() );
        t1.play();
        t1.timeScale( currentVal );
      });


})
