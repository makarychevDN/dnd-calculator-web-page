class Dice{
    constructor(maxValue){
        this._maxValue = maxValue;
        this._currentValue = 0;
    }

    roll(){
        this._currentValue = getRandomInteger(1, this._maxValue);
        return this._currentValue;
    }

    getCurrentValue(){
        return this._currentValue;
    }
}

function getRandomInteger(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min));
}