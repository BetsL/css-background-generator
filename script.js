var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// for background to match examples on page load -

function beginGradient(gradientOne, gradientTwo) {
    var gradientOne = "#00ff00";
    var gradientTwo = "#ff0000";

    body.style.background =
    "linear-gradient(to right, "
    + gradientOne
    + ", "
    + gradientTwo
    + ")";

    css.textContent = body.style.background + ";";
}

window.addEventListener("load", beginGradient());


// to change background with input -

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// to do - use math random + math floor for generator button
