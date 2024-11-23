class Dice{
    static #diceCount = 0;

    constructor(maxValue){
        this._maxValue = maxValue;
        this._currentValue = 0;

        Dice.#diceCount++;
        this._rollEventName = `dice${Dice.#diceCount}RollEvent`;
        this._onRollEvenet = new CustomEvent(this._rollEventName, {detail: {dice : this }});
    }

    roll(){
        this._currentValue = getRandomInteger(1, this._maxValue);
        dispatchEvent(this._onRollEvenet);
        return this._currentValue;
    }

    getCurrentValue(){
        return this._currentValue;
    }

    getUnicRollEventName(){
        return this._rollEventName;
    }
}

function getRandomInteger(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min));
}