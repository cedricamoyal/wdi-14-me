console.log('testing')


var arrayTotal;


var row ;
var colume;


var createBoard = function(column, row) {
    arrayTotal = []
    for (var i = 0; i < column; i++) {
        arrayTotal[i] = [];
        for (var j = 0; j < row; j++) {
            arrayTotal[i][j] = ' ';
        }
    }
    return arrayTotal;
}

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var createPixel = function(column, row) {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            $('<button/>', {
                'class': 'pixel',
                'data-i': alphabet[j],
                'data-j': i,
                'width': 30 / column + 'vw',
                'height': 80 / row + 'vh',


            }).appendTo('.seatPanel');

           $('<p>alphabet[j] + i</p>').appendTo('.pixel');
        }
    }
}

var creatSeatPanel =
 function(column, row){

createPixel(column, row)
createBoard(column, row)
}

creatSeatPanel(6, 8)
