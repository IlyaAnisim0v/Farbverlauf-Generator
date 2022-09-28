
let body = document.getElementById("background");

/* Farbeingabe */
let colorInput1 = document.getElementById("colorinput1");
let colorInput2 = document.getElementById("colorinput2");

let actualColor = window.getComputedStyle(document.body, null).getPropertyValue('background');
let textElement = document.querySelector("h3");

/* Buttons */
let randomButton1 = document.getElementById("randombutton1");
let randomButton2 = document.getElementById("randombutton2");
let resetButton = document.getElementById("resetbutton");

/* ----------------------------------------------------------- */

updateOutputText(actualColor);

function updateBackground() {
    body.style.background = `linear-gradient(to right, ${colorInput1.value}, ${colorInput2.value})`;
    updateOutputText(`linear-gradient(to right, ${colorInput1.value}, ${colorInput2.value})`);
}

function updateOutputText(text) {
    textElement.textContent = text + ";";
}

/* EVENT LISTENER */

randomButton1.addEventListener("click", function() {
    colorInput1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    updateBackground();
})

randomButton2.addEventListener("click", function() {
    colorInput2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    updateBackground();
})

resetbutton.addEventListener("click", function() {
    colorInput1.value = "#4744c8";
    colorInput2.value = "#9198e5";
    updateBackground();
});

colorInput1.addEventListener("input", updateBackground);
colorInput2.addEventListener("input", updateBackground);

