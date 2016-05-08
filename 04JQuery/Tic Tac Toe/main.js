console.log("Tic Tac Toe");

var $allCells = $(".cell");

$allCells.css("background-color", "hotpink");

var counter = 0;
var selectedCells = [];

    $allCells.on("click",function () {
            var $currentCell = $( this );

            for (var i = 0; i < 11; i++) {
                 if ( $currentCell.index() === selectedCells[i] ) {
                   alert ("Oops... You can't select this cell again. Please choose an other one my friend !!");
                   return;
                 }}

            counter++;

              if ( counter % 2 === 0 ){
            $currentCell.css("background-color", "blue");
            }
              if ( counter % 2 !== 0 ){
            $currentCell.css("background-color", "green");
            }

            console.log("You did " + counter + " valid clicks.");
            selectedCells.push($currentCell.index());
            console.log("The following cells have already been selected: " + selectedCells);

          });
