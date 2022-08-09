//Variables
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomGradient");
var copy = document.getElementById("copy");
var copyText = document.querySelector("div");

//Functions
function getGradient() {
    var gradient = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ");";
    return gradient;
}

function getGradientReversed(){
    var gradient = "background: linear-gradient(to right, " + color2.value + ", " + color1.value + ");";
    return gradient;
}

function setGradient() {
    body.style = getGradient(); //Set the gradient to the body background
    h3.textContent = getGradient(); //Write the CSS code to the h3 tag
    setButtonColor(); //Set the gradient to the button;
}

function generateRandomColor(){
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function setButtonColor() {
    button.style = getGradientReversed();
}

function generateRandomGradient() {
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    setGradient();
    setButtonColor();
}

function copyToClipboardGradient() {
    navigator.clipboard.writeText(getGradient());
    copyText.textContent = "COPIED!";
    setTimeout(function(){
        copyText.textContent = "Copy to clipboard";
    }, 1000);
}

//Event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", generateRandomGradient);
copy.addEventListener("click", copyToClipboardGradient);

//Generate random background on first load
generateRandomGradient();