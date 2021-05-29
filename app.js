var btnTranslate = document.querySelector("#btn__translate");
var txtInput = document.querySelector("#txt__input");
var outputDiv = document.querySelector('#output');



console.log(txtInput)

function clickEventHandler() {
    outputDiv.innerText='asdfasdfasdfasdf ' + txtInput.value;
};

btnTranslate.addEventListener('click', clickEventHandler);