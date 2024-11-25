function updateD20ModeLabel(modeText){
    document.getElementById("d20-mode-label").textContent = modeText;
}

function drawNewD20DiceButtons(parameter){
    removeOldD20DiceButtons();
    spawnD20DiceButtons(parameter);
}

function removeOldD20DiceButtons(){
    myNode = document.getElementById("d20-dices-parent")
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
}

function spawnD20DiceButtons(parameter){
    for(let dice of parameter.detail.dices){
        let spawnedButton = spawnDiceButton("d20-dices-parent", dice.getCurrentValue());
        addEventListener(dice.getUnicRollEventName(), function (parameter) {updateDiceButtonTextDueDiceValue(spawnedButton, parameter.detail.dice)});
        spawnedButton.addEventListener("click", function() {dice.roll()})
    }
}

function spawnDiceButton(htmlParentId, text) {
    let parent = document.getElementById(htmlParentId);
    let diceButton = document.createElement("button");
    parent.appendChild(diceButton);

    setD20ButtonStyle(diceButton);
    diceButton.textContent = text;

    return diceButton;
}

function setD20ButtonStyle(diceButton){
    diceButton.style = `
    color: white; 
    background-color: white; 
    font-size: small; 
    font-weight: bold; 
    background-image: url('Images/d20.png'); 
    background-size: 100% 100%; 
    border: none; 
    width: 22px;
    text-align: center; 
    padding: 0px`;
}

function updateDiceButtonTextDueDiceValue(diceButton, dice){
    diceButton.textContent = dice.getCurrentValue();
}

function displayResultOnLabel(value){
    document.getElementById("result-label").textContent = value;
}

function updateCharacterCharacteristicsOnD20Panel(character){
    updateProficiencyBonus(character);
    updateSelectModificatorMenu(character);
    setSelectModificatorOption(character.getlastUsedCharacteristicIndex())
}

function updateSelectModificatorMenu(character){
    document.getElementById("selected-modificator").options[0].innerHTML = `силы: ${character.getStrengthModificator()}`;
    document.getElementById("selected-modificator").options[1].innerHTML = `ловкости: ${character.getDexterityModificator()}`;
    document.getElementById("selected-modificator").options[2].innerHTML = `выносливости: ${character.getConstitutionModificator()}`;
    document.getElementById("selected-modificator").options[3].innerHTML = `интеллекта: ${character.getIntelligenceModificator()}`;
    document.getElementById("selected-modificator").options[4].innerHTML = `мудрости: ${character.getWisdomModificator()}`;
    document.getElementById("selected-modificator").options[5].innerHTML = `харизмы: ${character.getCharismaModificator()}`;
}

function updateProficiencyBonus(character){
    document.getElementById("proficiency-bonus-label").textContent = character.getProficiencyBonus();
}

function setSelectModificatorOption(index){
    document.getElementById("selected-modificator").selectedIndex = index;
}