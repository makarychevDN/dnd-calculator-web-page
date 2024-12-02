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
        spawnedButton.addEventListener("click", function() {dice.roll()});
        spawnedButton.addEventListener("click", function() {tempoararyAddThrowingAnimation(spawnedButton)});
        tempoararyAddThrowingAnimation(spawnedButton);
    }
}

function tempoararyAddThrowingAnimation(documentElement){
    documentElement.classList.add("falling-dice");
    setTimeout(() => documentElement.classList.remove("falling-dice"), 150);
}

function spawnDiceButton(htmlParentId, text) {
    let parent = document.getElementById(htmlParentId);
    let diceButton = document.createElement("button");
    parent.appendChild(diceButton);

    diceButton.classList.add("d20-button");

    diceButton.textContent = text;

    return diceButton;
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

function updateHealthBar(character){
    document.getElementById("health-label").textContent = character.getCurrentHealth();
    document.getElementById("health-bar").max = character.getMaxHealth();
    document.getElementById("health-bar").value = character.getCurrentHealth();
}