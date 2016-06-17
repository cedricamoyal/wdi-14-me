
$(document).ready(function () {
  var $lucky = $("#lucky");
  var $luckyButton = $lucky.find("button");

  $luckyButton.on("click", function (){
    $lucky.find("p").load("/lotto_numbers")
  });

  $("#uptime button").on("click", function (){
    $.ajax({
      url: "/uptime",
      type: "GET",
      datatype: "TEXT"
    }).done(function( data ){
      // $("#uptime p").text(data); //to replace info
      // to add info:
      $("#uptime p").prepend(data);
      $("#uptime p").prepend("<br />");
    });

  });

  $("#dashboard button").on("click", function (){
    $.ajax({
      url: "/info",
      type: "GET",
      datatype: "JSON"
    }).done(function( data ){

      $(".time").text(data.time);
      $(".luckyNumber").text(data.lucky_number);
      $(".fortune").text(data.fortune);

    });

  });




});
