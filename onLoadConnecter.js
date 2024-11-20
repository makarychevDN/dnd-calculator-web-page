let advantageThrowModeValue = 1;
let disadvantageThrowModeValue = -1;

window.onload = function() {
    document.getElementById("throw-d20-button").addEventListener("click", function() { throwD20(1) });
    document.getElementById("throw-d20-with-advantage-button").addEventListener("click", function() { throwD20(2, advantageThrowModeValue) });
    document.getElementById("throw-d20-with-disadvantage-button").addEventListener("click", function() { throwD20(2, disadvantageThrowModeValue) });
}

function spawnDiceButton(htmlParentId, text) {
    let parent = document.getElementById(htmlParentId);
    let diceButton = document.createElement("button");
    parent.appendChild(diceButton);

    diceButton.style = "my-button";
    diceButton.textContent = text;
}

function displayResultOnLabel(value){
    document.getElementById("result-label").textContent = value;
}