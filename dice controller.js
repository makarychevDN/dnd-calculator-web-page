function throwD20(diceCount, sortingMode){
    let d20Dices = [];
    for(let i = 0; i < diceCount; i++){
        d20Dices.push(new Dice(20));
    }
    dispatchEvent(new CustomEvent(getNameOfD20DicesAddedEvent(), {detail: { dices : d20Dices}}));

    d20Dices = rollDices(d20Dices);
    
    if(sortingMode){
        //sort the array in increasing order if sortingMod is more than 0 
        //and in decreasing order if less than 0
        d20Dices.sort((a, b) => (a.getCurrentValue() - b.getCurrentValue()) * -sortingMode);
    }

    let result = d20Dices[0];
    //displayResultOnLabel(result.getCurrentValue());
    dispatchEvent(new CustomEvent(getNameOfD20DicesAreThrownEvent(), {detail: { result : result}}));
    return result;
}

function rollDices(dices){
    dices.forEach(dice => {
        console.log(dice.roll());
    });
    
    return dices;
}

function getNameOfD20DicesAddedEvent(){
    return "newD20DicesAdded";
}

function getNameOfD20DicesAreThrownEvent(){
    return "newD20DicesThrown";
}