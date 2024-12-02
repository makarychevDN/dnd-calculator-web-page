class Character{
    constructor(strength, dexterity, constitution, intelligence, wisdom, charisma, lastUsedCharacteristicIndex, 
        proficiencyBonus, maxHealth, currentHealth, money){
        this._strength = strength;
        this._dexterity = dexterity;
        this._constitution = constitution;
        this._intelligence = intelligence;
        this._wisdom = wisdom;
        this._charisma = charisma;
        this._lastUsedCharacteristicIndex = lastUsedCharacteristicIndex;

        this._proficiencyBonus = proficiencyBonus;

        this._maxHealth = maxHealth;
        this._currentHealth = currentHealth;
        if(this._currentHealth > this._maxHealth) this._currentHealth = maxHealth;

        this._money = money;
    }

    getStrengthModificator(){ return this.getModificatorOfCharacteristic(this._strength)}
    getDexterityModificator(){ return this.getModificatorOfCharacteristic(this._dexterity)}
    getConstitutionModificator(){ return this.getModificatorOfCharacteristic(this._constitution)}
    getIntelligenceModificator(){ return this.getModificatorOfCharacteristic(this._intelligence)}
    getWisdomModificator(){ return this.getModificatorOfCharacteristic(this._wisdom)}
    getCharismaModificator(){ return this.getModificatorOfCharacteristic(this._charisma)}

    getlastUsedCharacteristicIndex(){ return this._lastUsedCharacteristicIndex}

    getCurrentHealth(){return this._currentHealth};
    getMaxHealth(){return this._maxHealth};

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
        dispatchEvent(new CustomEvent("lastUsedCharacteristicIndexChanged", 
            {detail: {modificator : this.getLastUsedCharacteristicModificator() }}));
    }

    setMaxHealth(value){
        this._maxHealth = value;
        dispatchEvent(new CustomEvent("healthUpdated", 
            {detail: {character : this }}));
    }

    setCurrentHealth(value){
        this._currentHealth = Number(value);
        dispatchEvent(new CustomEvent("healthUpdated", 
            {detail: {character : this }}));
    }

    increaseCurrentHealth(value){
        this._currentHealth += Number(value);

        if(this._currentHealth > this._maxHealth)
            this._currentHealth = this._maxHealth;

        dispatchEvent(new CustomEvent("healthUpdated", 
            {detail: {character : this }}));
    }

    decreaseCurrentHealth(value){
        this.increaseCurrentHealth(-value);
    }
    
    getProficiencyBonus(){ return this._proficiencyBonus}

    getModificatorOfCharacteristic(characteristic){
        return Math.floor(characteristic / 2) - 5;
    }

    getProficiencyBonus(){
        return this._proficiencyBonus;
    }
}