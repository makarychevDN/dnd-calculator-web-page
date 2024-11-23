function updateD20ModeLabel(modeText){
    document.getElementById("d20-mode-label").textContent = modeText;
}

function drawNewD20DiceButtons(parameter){
    removeOldD20DiceButtons();
    spawnD20DiceButtons(parameter);
}

function removeOldD20DiceButtons(){
    myNode = document.getElementById("d20-dices-parent")
    while (myNode.lastElementChild) {
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

function spawnDiceButton(htmlParentId, text) {
    let parent = document.getElementById(htmlParentId);
    let diceButton = document.createElement("button");
    parent.appendChild(diceButton);

    diceButton.style = "my-button";
    diceButton.textContent = text;

    return diceButton;
}

function updateDiceButtonTextDueDiceValue(diceButton, dice){
    diceButton.textContent = dice.getCurrentValue();
}

function displayResultOnLabel(value){
    document.getElementById("result-label").textContent = value;
}