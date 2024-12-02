let advantageThrowModeValue = 1;
let disadvantageThrowModeValue = -1;

window.onload = function() {
    addListenersForD20ThrowingButtons();
    addEventListener(getNameOfD20DicesAddedEvent(), function(parameter) {drawNewD20DiceButtons(parameter)});
    addListenersToUpdateD20ThrowResults();
        
    addEventListener("characterIsSetted", function(parameter) {updateCharacterCharacteristicsOnD20Panel(parameter.detail.character)});
    updateCharacterCharacteristicsOnD20Panel(currentCharacter);


    addEventListener("healthUpdated", function(parameter) {updateHealthBar(parameter.detail.character)});
    updateHealthBar(currentCharacter);

    let selectModificatorMenu = document.getElementById("selected-modificator");
    selectModificatorMenu.addEventListener("change", function(){currentCharacter.setLastUsedCharacteristic(selectModificatorMenu.selectedIndex)});
    addListenersToHealthBarEvents();
    addListenersToHealthButtonsEvents();
}

function addListenersToUpdateD20ThrowResults(){
    addEventListener(getNameOfD20CorrectDiceIsSelected(), function(parameter) {
        displayResultOnLabel(
            calculateResultOfD20ThrowToDisplayOnLabel(
                parameter.detail.result, 
                currentCharacter.getProficiencyBonus(), 
                currentCharacter.getLastUsedCharacteristicModificator()
            )
        );
    });

    addEventListener("lastUsedCharacteristicIndexChanged", function(parameter) {
        displayResultOnLabel(
            calculateResultOfD20ThrowToDisplayOnLabel(
                getCurrentCorrectlyDice(), 
                currentCharacter.getProficiencyBonus(), 
                parameter.detail.modificator
            )
        );
    });
}
 
function addListenersForD20ThrowingButtons(){
    document.getElementById("throw-d20-button").addEventListener("click", 
        function() { 
            throwD20(1); 
            updateD20ModeLabel("");
         }
    );
    document.getElementById("throw-d20-with-advantage-button").addEventListener("click", 
        function() { 
            throwD20(2, advantageThrowModeValue); 
            updateD20ModeLabel("с преимуществом"); 
        }
    );
    document.getElementById("throw-d20-with-disadvantage-button").addEventListener("click", 
        function() { 
            throwD20(2, disadvantageThrowModeValue); 
            updateD20ModeLabel("с помехой"); 
        }
    );
}

function calculateResultOfD20ThrowToDisplayOnLabel(d20Dice, proficiencyBonus, lastSelectedCharacteristicModificator){
    if(!d20Dice){
        return "";
    }

    if(d20Dice.getCurrentValue() == 1)
        return 1;
    
    let result = d20Dice.getCurrentValue() + proficiencyBonus + lastSelectedCharacteristicModificator;
    result += d20Dice.getCurrentValue() == 20 ? " КРИТ" : "";

    return result;
}

function addListenersToHealthBarEvents(){
    let healthBar = document.getElementById("health-bar");
    healthBar.addEventListener("input", function(){currentCharacter.setCurrentHealth(healthBar.value)});
}

function addListenersToHealthButtonsEvents(){
    let changeHealthInputField = document.getElementById("change-health-input-field");

    document.getElementById("decrease-health-button").addEventListener("click", 
        function() {
            currentCharacter.decreaseCurrentHealth(changeHealthInputField.value);
            changeHealthInputField.value = 1;
        }
    );

    document.getElementById("increase-health-button").addEventListener("click", 
        function() {
            currentCharacter.increaseCurrentHealth(changeHealthInputField.value);
            changeHealthInputField.value = 1;
        }
    );
    
    changeHealthInputField.addEventListener("input", 
        function() {

            let correctedValue = changeHealthInputField.value;

            if(isNaN(Number(correctedValue))){
                correctedValue = Array.from(correctedValue)
                    .filter(char => !isNaN(Number(char)))
                    .join("");
            }

            while(correctedValue[0] == "0"){
                correctedValue = correctedValue.slice(1);
            }

            if(!correctedValue){
                correctedValue = 0;
            }

            changeHealthInputField.value = correctedValue;
        }
    );
}