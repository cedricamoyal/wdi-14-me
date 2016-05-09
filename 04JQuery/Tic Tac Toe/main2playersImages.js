console.log("Tic Tac Toe");

var $allCells = $(".cell");
var $newGameButtonAction = $(".newGameButton");

var image00 = "url(http://image.spreadshirtmedia.com/image-server/v1/designs/10961530,width=280,height=280?mediaType=png)";

var image11 = "url(https://raw.githubusercontent.com/christkv/tic-tac-toe/master/public/img/cross.png)";
var image22 = "url(https://raw.githubusercontent.com/christkv/tic-tac-toe/master/public/img/circle.png)";

var image0 = 'url("http://image.spreadshirtmedia.com/image-server/v1/designs/10961530,width=280,height=280?mediaType=png")';

var image1 = 'url("https://raw.githubusercontent.com/christkv/tic-tac-toe/master/public/img/cross.png")';
var image2 = 'url("https://raw.githubusercontent.com/christkv/tic-tac-toe/master/public/img/circle.png")';


$allCells.css("background-image", image00);
$allCells.css("background-color", "white");

var counter = 0;
var selectedCells = [];
var winner;
var winningCells;



    $allCells.on("click",function () {
            var $currentCell = $( this );


             if ( this.style.backgroundImage !== image0
            ) {
               myErroAlert();
               return;
             }

            counter++;

              if ( counter % 2 === 0 ){
            $currentCell.css("background-image", image11);
            }
              if ( counter % 2 !== 0 ){
            $currentCell.css("background-image", image22);
            }

            console.log("You did " + counter + " valid clicks.");
            selectedCells.push($currentCell.index());
            console.log("The following cells have already been selected: " + selectedCells);

// For player green to win:

            for (var i = 0; i < 3; i++) {
                if ($allCells[0+(3*i)].style.backgroundImage === image1 &&
                $allCells[1+(3*i)].style.backgroundImage === image1 &&
                $allCells[2+(3*i)].style.backgroundImage === image1) {


                  $allCells[0+(3*i)].style.backgroundColor = "yellow";
                  $allCells[1+(3*i)].style.backgroundColor = "yellow";
                  $allCells[2+(3*i)].style.backgroundColor = "yellow";

                    winner = "The cross";
                    thereIsAWinnerAlert();
                  }
                 }

             for (var i = 0; i < 3; i++) {
                 if ($allCells[0+i].style.backgroundImage === image1 &&
                 $allCells[3+i].style.backgroundImage === image1 &&
                 $allCells[6+i].style.backgroundImage === image1) {

                   $allCells[0+i].style.backgroundColor = "yellow";
                   $allCells[3+i].style.backgroundColor = "yellow";
                   $allCells[6+i].style.backgroundColor = "yellow";

                     winner = "The cross";
                     thereIsAWinnerAlert();
                   }
                  }

              if ($allCells[0].style.backgroundImage === image1 &&
              $allCells[4].style.backgroundImage === image1 &&
              $allCells[8].style.backgroundImage === image1) {

                $allCells[0].style.backgroundColor = "yellow";
                $allCells[4].style.backgroundColor = "yellow";
                $allCells[8].style.backgroundColor = "yellow";

                  winner = "The cross";
                  thereIsAWinnerAlert();
                }

              if ($allCells[2].style.backgroundImage === image1 &&
              $allCells[4].style.backgroundImage === image1 &&
              $allCells[6].style.backgroundImage === image1) {

                $allCells[2].style.backgroundColor = "yellow";
                $allCells[4].style.backgroundColor = "yellow";
                $allCells[6].style.backgroundColor = "yellow";

                  winner = "The cross";
                  thereIsAWinnerAlert();
                }

// For player blue to win:

            for (var i = 0; i < 3; i++) {
                if ($allCells[0+(3*i)].style.backgroundImage === image2 &&
                $allCells[1+(3*i)].style.backgroundImage === image2 &&
                $allCells[2+(3*i)].style.backgroundImage === image2) {


                  $allCells[0+(3*i)].style.backgroundColor = "yellow";
                  $allCells[1+(3*i)].style.backgroundColor = "yellow";
                  $allCells[2+(3*i)].style.backgroundColor = "yellow";

                    winner = "The circle";
                    thereIsAWinnerAlert();
                  }
                 }

                 for (var i = 0; i < 3; i++) {
                     if ($allCells[0+i].style.backgroundImage === image2 &&
                     $allCells[3+i].style.backgroundImage === image2 &&
                     $allCells[6+i].style.backgroundImage === image2) {

                       $allCells[0+i].style.backgroundColor = "yellow";
                       $allCells[3+i].style.backgroundColor = "yellow";
                       $allCells[6+i].style.backgroundColor = "yellow";

                         winner = "The circle";
                         thereIsAWinnerAlert();
                       }
                      }

                      if ($allCells[0].style.backgroundImage === image2 &&
                      $allCells[4].style.backgroundImage === image2 &&
                      $allCells[8].style.backgroundImage === image2) {

                        $allCells[0].style.backgroundColor = "yellow";
                        $allCells[4].style.backgroundColor = "yellow";
                        $allCells[8].style.backgroundColor = "yellow";

                          winner = "The circle";
                          thereIsAWinnerAlert();
                        }

                      if ($allCells[2].style.backgroundImage === image2 &&
                      $allCells[4].style.backgroundImage === image2 &&
                      $allCells[6].style.backgroundImage === image2) {

                        $allCells[2].style.backgroundColor = "yellow";
                        $allCells[4].style.backgroundColor = "yellow";
                        $allCells[6].style.backgroundColor = "yellow";

                          winner = "The circle";
                          thereIsAWinnerAlert();
                        }
//Tie
              if (
              $allCells[0].style.backgroundImage !== image0 &&
              $allCells[1].style.backgroundImage !== image0 &&
              $allCells[2].style.backgroundImage !== image0 &&
              $allCells[3].style.backgroundImage !== image0 &&
              $allCells[4].style.backgroundImage !== image0 &&
              $allCells[5].style.backgroundImage !== image0 &&
              $allCells[6].style.backgroundImage !== image0 &&
              $allCells[7].style.backgroundImage !== image0 &&
              $allCells[8].style.backgroundImage !== image0 &&
              winner !== "The circle" &&
              winner !== "The cross"
              )
              { tieAlert(); }


          });

$newGameButtonAction.on("click",function () {
    $allCells.css("background-image", image00);
    $allCells.css("background-color", "white");
    console.log("You asked for a new game?");
});

var myErroAlert = function(){
  swal({   title: "Oops ...",   text: "You can't select this cell again.\n Please choose an other one my friend !!",   type: "error",   confirmButtonText: "Go back to the game" });
}

var thereIsAWinnerAlert = function(){
  swal({   title: "And the winner is:\n" + winner + " !",   text: "Good Job !",   type: "success",   confirmButtonText: "Play again" });
}

var tieAlert = function(){
  swal({   title: "Tie !",   text: "I am sure that you can do better !",   type: "success",   confirmButtonText: "Play again" });
}
