function throwD20(diceCount, sortingMode){
    let d20Dices = [];
    for(let i = 0; i < diceCount; i++){
        let newDIce = new Dice(20);
        d20Dices.push(newDIce);
        newDIce.roll();
        addEventListener(newDIce.getUnicRollEventName(), function() {selectCorrectD20Dice(d20Dices, sortingMode)})
    }
    dispatchEvent(new CustomEvent(getNameOfD20DicesAddedEvent(), {detail: { dices : d20Dices}}));

    return selectCorrectD20Dice(d20Dices, sortingMode);
}

function selectCorrectD20Dice(d20Dices, sortingMode){
    if(sortingMode){
        //sort the array in decreasing order if sortingMod is more than 0 
        //and in increasing order if less than 0
        d20Dices = d20Dices.sort((a, b) => (a.getCurrentValue() - b.getCurrentValue()) * -sortingMode);
    }

    dispatchEvent(new CustomEvent(getNameOfD20CorrectDiceIsSelected(), {detail: { result : d20Dices[0]}}));
    return d20Dices[0];
}

function getNameOfD20DicesAddedEvent(){
    return "newD20DicesAdded";
}

function getNameOfD20CorrectDiceIsSelected(){
    return "correctD20DiceIsSelected";
}