var numSquares = 6;
var colors = [];
var pickedColor; 
var squeres = document.querySelectorAll(".squere");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSqueres();
    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSqueres(){
    for(var i = 0; i < squeres.length; i++){
        squeres[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
        
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
                resetButton.textContent = "Reset";
            }
        });
    }
}



function reset(){
    colors = genarateRandomColors(numSquares); 
    //pick new random color from array
    pickedColor = pickColor();
    resetButton.textContent = "new colors";
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for(var i = 0; i < squeres.length; i++){
        /* squeres[i].style.backgroundColor = colors[i]; */

        if(colors[i]){
            squeres[i].style.display = "block";
            squeres[i].style.backgroundColor = colors[i];
        }else{
            squeres[i].style.display = "none";
        }
    

    }
    h1.style.backgroundColor = "#4682b4";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for(var i = 0; i < squeres.length; i++){
        squeres[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genarateRandomColors(num) {
    //make array
    var arr = []
    //add mun random colors to array
    for(var i = 0; i < num; i++){
       arr.push(randomColor()); 
    }   
    //return that array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
