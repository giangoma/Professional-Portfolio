var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var circles = document.querySelectorAll(".circle");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("DISPLAYCOLOR");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
colorDisplay.textContent = pickedColor;
init();
function init() {
    setupSquares();
    reset();
}
function setupSquares() {
    //This colors the circles
    for (var i = 0; i < colors.length; i++) {
        //This adds click listeners to the circles
        circles[i].addEventListener("click", function () {
            //Grabs color of clicked circle
            var clickedColor = this.style.backgroundColor;
            //Compares color to the picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!!!";
            }
        });
    }
}
//Reset button, to reset and provide new colors.
resetButton.addEventListener("click", function () {
    //Generate new colors
    colors = generateRandomColors(numSquares);
    //Pick a new random color
    pickedColor = pickColor();
    //Changes color Display to match picked color
    colorDisplay.textContent = pickedColor;
    //
    for (var i = 0; i < colors.length; i++) {
        //Colors the circles
        circles[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
});
function reset() {
    //Generate new colors
    colors = generateRandomColors(numSquares);
    //Pick a new random color
    pickedColor = pickColor();
    //Changes color Display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //Changes circles' colors
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
}
function changeColor(color) {
    //Loops through all circles
    for (var i = 0; i < colors.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    //Creates an array
    var arr = [];
    for (var i = 0; i < num; i++) {
        //Gets random color and pushes to array
        arr.push(randomColor());
    }
    //Returns array
    return arr;
}
function randomColor() {
    //Picks a 'red' value, from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //Same way like above but green
    var g = Math.floor(Math.random() * 256);
    //Same way like above but blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
