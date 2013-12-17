

function add() {

}


function display(str) {
    var dispText = document.getElementById("disp").value;

    if (dispText == null) {
        dispText = str;
    } else {
        dispText = document.getElementById("disp").value + str;
    }

    document.getElementById("disp").value = dispText;

}

