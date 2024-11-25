let _currentD20Dices;
let _currentCorrectlyDice;

function throwD20(diceCount, sortingMode){
    _currentD20Dices = [];
    for(let i = 0; i < diceCount; i++){
        let newDIce = new Dice(20);
        _currentD20Dices.push(newDIce);
        newDIce.roll();
        addEventListener(newDIce.getUnicRollEventName(), function() {selectCorrectD20Dice(_currentD20Dices, sortingMode)})
    }
    dispatchEvent(new CustomEvent(getNameOfD20DicesAddedEvent(), {detail: { dices : _currentD20Dices}}));

    return _currentCorrectlyDice = selectCorrectD20Dice(_currentD20Dices, sortingMode);
}

function selectCorrectD20Dice(dices, sortingMode){
    if(sortingMode){
        //sort the array in decreasing order if sortingMod is more than 0 
        //and in increasing order if less than 0
        dices = dices.sort((a, b) => (a.getCurrentValue() - b.getCurrentValue()) * -sortingMode);
    }

    dispatchEvent(new CustomEvent(getNameOfD20CorrectDiceIsSelected(), {detail: { result : dices[0]}}));
    return dices[0];
}

function getNameOfD20DicesAddedEvent(){
    return "newD20DicesAdded";
}

function getNameOfD20CorrectDiceIsSelected(){
    return "correctD20DiceIsSelected";
}

function getCurrentDices(){
    return _currentD20Dices;
}

function getCurrentCorrectlyDice(){
    return _currentCorrectlyDice;
}