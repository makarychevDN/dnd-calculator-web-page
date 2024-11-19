class Dice{
    constructor(maxValue){
        this.maxValue = maxValue;
    }

    roll(){
        return getRandomInteger(0, this.maxValue);  
    }
}

function getRandomInteger(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min));
}