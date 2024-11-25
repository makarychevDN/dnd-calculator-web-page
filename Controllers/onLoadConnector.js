let advantageThrowModeValue = 1;
let disadvantageThrowModeValue = -1;

window.onload = function() {
    addListenersForD20ThrowingButtons();
    addEventListener(getNameOfD20DicesAddedEvent(), function(parameter) {drawNewD20DiceButtons(parameter)});
    addListenersToUpdateD20ThrowResults();
        
    addEventListener("characterIsSetted", function(parameter) {updateCharacterCharacteristicsOnD20Panel(parameter.detail.character)});
    updateCharacterCharacteristicsOnD20Panel(currentCharacter);

    let selectModificatorMenu = document.getElementById("selected-modificator");
    selectModificatorMenu.addEventListener("change", function(){currentCharacter.setLastUsedCharacteristic(selectModificatorMenu.selectedIndex)});
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
                currentCorrectlyDice, 
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

    return d20Dice.getCurrentValue() + proficiencyBonus + lastSelectedCharacteristicModificator;
}