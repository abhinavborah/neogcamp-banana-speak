var btnTranslate = document.querySelector("#btn__translate");
var txtInput = document.querySelector("#txt__input");

console.log(txtInput)

function clickEventHandler() {
    console.log("clicked!");
    console.log("input", txtInput.value)
};

btnTranslate.addEventListener('click', clickEventHandler);