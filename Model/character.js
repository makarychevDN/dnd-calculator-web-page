class Character{
    constructor(strength, dexterity, constitution, intelligence, wisdom, charisma, proficiencyBonus){
        this._strength = strength;
        this._dexterity = dexterity;
        this._constitution = constitution;
        this._intelligence = intelligence;
        this._wisdom = wisdom;
        this._charisma = charisma;

        this._proficiencyBonus = proficiencyBonus;
    }

    getStrengthModificator(){ return this.getModificatorOfCharacteristic(this._strength)}
    getDexterityModificator(){ return this.getModificatorOfCharacteristic(this._dexterity)}
    getConstitutionModificator(){ return this.getModificatorOfCharacteristic(this._constitution)}
    getIntelligenceModificator(){ return this.getModificatorOfCharacteristic(this._intelligence)}
    getWisdomModificator(){ return this.getModificatorOfCharacteristic(this._wisdom)}
    getCharismaModificator(){ return this.getModificatorOfCharacteristic(this._charisma)}

    getModificatorOfCharacteristic(characteristic){
        return Math.floor(characteristic / 2) - 5;
    }

    getProficiencyBonus(){
        return this._proficiencyBonus;
    }
}