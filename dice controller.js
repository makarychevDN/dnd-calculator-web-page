window.onload = function() {
    document.getElementById("throw-d20-button").addEventListener("click", throwD20);
    document.getElementById("throw-d20-with-advantage-button").addEventListener("click", throwD20WithAdvantage);
    document.getElementById("throw-d20-with-disadvantage-button").addEventListener("click", throwD20WithDisadvantage);
}

function spawnDiceButton() {
    let parent = document.getElementById("dices-parent");
    let diceButton = document.createElement("button");
    diceButton.style = "my-button";
    diceButton.textContent = "d20";
    parent.appendChild(diceButton);
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

function rollDices(dices){
    dices.forEach(dice => {
        console.log(dice.roll());
        spawnDiceButton("d20-dices-parent", dice.getCurrentValue());
    });
    
    return dices;
}

function throwD20(){
    let dice =  new Dice(20);
    let d20Dices = [dice];

    d20Dices = rollDices(d20Dices);

    //null sorting

    let result = d20Dices[0];
    displayResultOnLabel(result.getCurrentValue());
    return result;
}

function throwD20WithAdvantage(){
    let dice1 =  new Dice(20);
    let dice2 =  new Dice(20);
    let d20Dices = [dice1, dice2];

    d20Dices = rollDices(d20Dices);

    d20Dices.sort((a, b) => b.getCurrentValue() - a.getCurrentValue());

    let result = d20Dices[0];
    displayResultOnLabel(result.getCurrentValue());
    return result;
}

function throwD20WithDisadvantage(){
    let dice1 =  new Dice(20);
    let dice2 =  new Dice(20);
    let d20Dices = [dice1, dice2];

    d20Dices = rollDices(d20Dices);

    d20Dices.sort((a, b) => a.getCurrentValue() - b.getCurrentValue());

    let result = d20Dices[0];
    displayResultOnLabel(result.getCurrentValue());
    return result;
}