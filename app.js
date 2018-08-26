colors = [
  "rgb(255,0 ,0)",
  "rgb(255,255 ,0)",
  "rgb(0,255,0)",
  "rgb(0,255 ,255)",
  "rgb(,0 ,255)",
  "rgb(255,0 ,255)"
]; //array of colors

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");

colorDisplay.textContent = pickedColor;
for (let i = 0; i < squares.length; i++) {
  //ad initial colors on square
  squares[i].style.backgroundColor = colors[i];
  // add click events
  squares[i].addEventListener("click", function() {
    //colothr of clicked square
    let clickedColor = (squares[i].style.backgroundColor = colors[i]);
    if (clickedColor === pickedColor) {
      message.textContent = "correct";
      changeColors(clickedColor);
    } else {
      squares[i].style.background = "#232323";
      message.textContent = "try again";
    }
    //compare
  });
}

// change colors

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

//picked color
function pickedColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
