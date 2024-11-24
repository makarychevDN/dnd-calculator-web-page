class Character{
    constructor(strength, dexterity, constitution, intelligence, wisdom, charisma, lastUsedCharacteristicIndex, proficiencyBonus){
        this._strength = strength;
        this._dexterity = dexterity;
        this._constitution = constitution;
        this._intelligence = intelligence;
        this._wisdom = wisdom;
        this._charisma = charisma;

        this._lastUsedCharacteristicIndex = lastUsedCharacteristicIndex;

        this._proficiencyBonus = proficiencyBonus;
    }

    getStrengthModificator(){ return this.getModificatorOfCharacteristic(this._strength)}
    getDexterityModificator(){ return this.getModificatorOfCharacteristic(this._dexterity)}
    getConstitutionModificator(){ return this.getModificatorOfCharacteristic(this._constitution)}
    getIntelligenceModificator(){ return this.getModificatorOfCharacteristic(this._intelligence)}
    getWisdomModificator(){ return this.getModificatorOfCharacteristic(this._wisdom)}
    getCharismaModificator(){ return this.getModificatorOfCharacteristic(this._charisma)}

    getlastUsedCharacteristicIndex(){ return this._lastUsedCharacteristicIndex}

    getLastUsedCharacteristicModificator(){
        switch (this._lastUsedCharacteristicIndex) {
            case 0: return this.getStrengthModificator();
            case 1: return this.getDexterityModificator();
            case 2: return this.getConstitutionModificator();
            case 3: return this.getIntelligenceModificator();
            case 4: return this.getWisdomModificator();
            case 5: return this.getCharismaModificator();
        }
    }

    setLastUsedCharacteristic(indexOfCharacterstic){
        this._lastUsedCharacteristicIndex = indexOfCharacterstic;
    }
    
    getProficiencyBonus(){ return this._proficiencyBonus}

    getModificatorOfCharacteristic(characteristic){
        return Math.floor(characteristic / 2) - 5;
    }

    getProficiencyBonus(){
        return this._proficiencyBonus;
    }
}