var chessChars = ["a", "b", "c", "d", "e", "f", "g", "h"];
var chessNumbers = ["8", "7", "6", "5", "4", "3", "2", "1"];
var blackFigures = ["&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;", "&#9823;"];
var whiteFigures = ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;", "&#9817;"];
// Последние фигуры в массивах blackFigures и whiteFigures - пешки.

var table = document.createElement("table");
for (var i = 1; i <= 10; i++) {
    var tr = document.createElement("tr");
    table.append(tr);
    switch (i) {
        case 1:
            for (var j = 1; j <= 10; j++) {
                var td = document.createElement("td");
                switch (j) {
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        td.innerHTML = "<h2>" + chessChars[j - 2] + "</h2>";
                        td.className = "rotate";
                        break;
                }
                tr.append(td);
            }
            break;
        case 2:
            for (var j = 1; j <= 10; j++) {
                var td = document.createElement("td");
                switch (j) {
                    case 1:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "text_style";
                        break;
                    case 2:
                    case 4:
                    case 6:
                    case 8:
                        td.innerHTML = "<h2>" + blackFigures[j - 2] + "</h2>";
                        td.className = "black_block";
                        break;
                    case 3:
                    case 5:
                    case 7:
                    case 9:
                        td.innerHTML = "<h2>" + blackFigures[j - 2] + "</h2>";
                        td.className = "white_block";
                        break;
                    case 10:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "rotate";
                        break;
                }
                tr.append(td);
            }
            break;
        case 3:
            for (var j = 1; j <= 10; j++) {
                var td = document.createElement("td");
                switch (j) {
                    case 1:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "text_style";
                        break;
                    case 2:
                    case 4:
                    case 6:
                    case 8:
                        td.innerHTML = "<h2>" + blackFigures[8] + "</h2>";
                        td.className = "white_block";
                        break;
                    case 3:
                    case 5:
                    case 7:
                    case 9:
                        td.innerHTML = "<h2>" + blackFigures[8] + "</h2>";
                        td.className = "black_block";
                        break;
                    case 10:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "rotate";
                        break;
                }
                tr.append(td);
            }
            break;
        case 4:
        case 6:
            for (var j = 1; j <= 10; j++) {
                var td = document.createElement("td");
                switch (j) {
                    case 1:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "text_style";
                        break;
                    case 2:
                    case 4:
                    case 6:
                    case 8:
                        td.className = "black_block";
                        break;
                    case 3:
                    case 5:
                    case 7:
                    case 9:
                        td.className = "white_block";
                        break;
                    case 10:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "rotate";
                        break;
                }
                tr.append(td);
            }
            break;
        case 5:
        case 7:
            for (var j = 1; j <= 10; j++) {
                var td = document.createElement("td");
                switch (j) {
                    case 1:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "text_style";
                        break;
                    case 2:
                    case 4:
                    case 6:
                    case 8:
                        td.className = "white_block";
                        break;
                    case 3:
                    case 5:
                    case 7:
                    case 9:
                        td.className = "black_block";
                        break;
                    case 10:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "rotate";
                        break;
                }
                tr.append(td);
            }
            break;
        case 8:
            for (var j = 1; j <= 10; j++) {
                var td = document.createElement("td");
                switch (j) {
                    case 1:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "text_style";
                        break;
                    case 2:
                    case 4:
                    case 6:
                    case 8:
                        td.innerHTML = "<h2>" + whiteFigures[8] + "</h2>";
                        td.className = "black_block";
                        break;
                    case 3:
                    case 5:
                    case 7:
                    case 9:
                        td.innerHTML = "<h2>" + whiteFigures[8] + "</h2>";
                        td.className = "white_block";
                        break;
                    case 10:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "rotate";
                        break;
                }
                tr.append(td);
            }
            break;
        case 9:
            for (var j = 1; j <= 10; j++) {
                var td = document.createElement("td");
                switch (j) {
                    case 1:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "text_style";
                        break;
                    case 2:
                    case 4:
                    case 6:
                    case 8:
                        td.innerHTML = "<h2>" + whiteFigures[j - 2] + "</h2>";
                        td.className = "white_block";
                        break;
                    case 3:
                    case 5:
                    case 7:
                    case 9:
                        td.innerHTML = "<h2>" + whiteFigures[j - 2] + "</h2>";
                        td.className = "black_block";
                        break;
                    case 10:
                        td.innerHTML = "<h2>" + chessNumbers[i - 2] + "</h2>";
                        td.className = "rotate";
                        break;
                }
                tr.append(td);
            }
            break;
        case 10:
            for (var j = 1; j <= 10; j++) {
                var td = document.createElement("td");
                switch (j) {
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        td.innerHTML = "<h2>" + chessNumbers[j - 2] + "</h2>";
                        td.className = "text_style";
                        break;
                }
                tr.append(td);
            }
            break;
    }
}
document.querySelector("div").append(table);;