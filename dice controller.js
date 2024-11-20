let d20dices;

window.onload = function() {
    document.getElementById("throw-d20-button").addEventListener("click", throwD20);
    document.getElementById("throw-d20-with-advantage-button").addEventListener("click", throwD20WithAdvantage);
    document.getElementById("throw-d20-with-disadvantage-button").addEventListener("click", throwD20WithDisadvantage);
    let dice1 =  new Dice(20);
    let dice2 =  new Dice(20);
    d20dices = [dice1, dice2];
}

function spawnDiceButton() {
    let parent = document.getElementById("dices-parent");
    let diceButton = document.createElement("button");
    diceButton.style = "my-button";
    diceButton.textContent = "d20";
    parent.appendChild(diceButton);
}

function displayResultOnLabel(value){
    document.getElementById("result-label").textContent = value;
}

function throwDices(dices){
    dices.forEach(dice => {
        console.log(dice.roll());
    });
    
    return dices;
}

function throwD20(){
    throwDices(d20dices);
    let result = d20dices[0];
    displayResultOnLabel(result.getCurrentValue());
    return result;
}

function throwD20WithAdvantage(){
    throwDices(d20dices);
    d20dices.sort((a, b) => b.getCurrentValue() - a.getCurrentValue());
    let result = d20dices[0];
    displayResultOnLabel(result.getCurrentValue());
    return result;
}

function throwD20WithDisadvantage(){
    throwDices(d20dices);
    d20dices.sort((a, b) => a.getCurrentValue() - b.getCurrentValue());
    let result = d20dices[0];
    displayResultOnLabel(result.getCurrentValue());
    return result;
}