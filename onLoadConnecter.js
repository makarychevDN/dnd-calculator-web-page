let advantageThrowModeValue = 1;
let disadvantageThrowModeValue = -1;

window.onload = function() {
    document.getElementById("throw-d20-button").addEventListener("click", function() { throwD20(1) });
    document.getElementById("throw-d20-with-advantage-button").addEventListener("click", function() { throwD20(2, advantageThrowModeValue) });
    document.getElementById("throw-d20-with-disadvantage-button").addEventListener("click", function() { throwD20(2, disadvantageThrowModeValue) });

    addEventListener(getNameOfD20DicesAddedEvent(), function(parameter) {drawNewD20DiceButtons(parameter)});
    addEventListener(getNameOfD20CorrectDiceIsSelected(), function(parameter) {displayResultOnLabel(parameter.detail.result.getCurrentValue())});
}

function drawNewD20DiceButtons(parameter){
    removeOldD20DiceButtons();
    spawnD20DiceButtons(parameter);
}

function removeOldD20DiceButtons(){
    myNode = document.getElementById("d20-dices-parent")
    while (myNode.lastElementChild) {
        myNode.lastElementChild.removeEventListener("click", function (parameter) {updateDiceButtonTextDueDiceValue(spawnedButton, parameter.detail.dice)});
        myNode.removeChild(myNode.lastElementChild);
    }
}

function spawnD20DiceButtons(parameter){
    for(let dice of parameter.detail.dices){
        let spawnedButton = spawnDiceButton("d20-dices-parent", dice.getCurrentValue());
        addEventListener(dice.getUnicRollEventName(), function (parameter) {updateDiceButtonTextDueDiceValue(spawnedButton, parameter.detail.dice)});
        spawnedButton.addEventListener("click", function() {dice.roll()})
    }
}

function updateDiceButtonTextDueDiceValue(diceButton, dice){
    diceButton.textContent = dice.getCurrentValue();
}

function spawnDiceButton(htmlParentId, text) {
    let parent = document.getElementById(htmlParentId);
    let diceButton = document.createElement("button");
    parent.appendChild(diceButton);

    diceButton.style = "my-button";
    diceButton.textContent = text;

    return diceButton;
}

function displayResultOnLabel(value){
    document.getElementById("result-label").textContent = value;
}