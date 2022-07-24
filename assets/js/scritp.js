//function that display value
function dis(val) {
    document.getElementById("result").value += val
}

//function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//function that clear the display
function clr() {
    document.getElementById("result").value = ""
}

function Del() {
    let x = document.getElementById("result").value
    document.getElementById("result").value = x.substring(0, x.length - 1);
}


function cent() {


    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result") .value = ( x / 100) * percent;

}