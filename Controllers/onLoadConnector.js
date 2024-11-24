let advantageThrowModeValue = 1;
let disadvantageThrowModeValue = -1;

window.onload = function() {
    addListenersForD20ThrowingButtons();
    addEventListener(getNameOfD20DicesAddedEvent(), function(parameter) {drawNewD20DiceButtons(parameter)});
    addEventListener(getNameOfD20CorrectDiceIsSelected(), function(parameter) {displayResultOnLabel(
        parameter.detail.result.getCurrentValue() + currentCharacter.getProficiencyBonus() + currentCharacter.getStrengthModificator())});
    addEventListener("characterIsSetted", function(parameter) {updateCharacterCharacteristicsOnD20Panel(parameter.detail.character)});

    updateCharacterCharacteristicsOnD20Panel(currentCharacter);
}
 
function addListenersForD20ThrowingButtons(){
    document.getElementById("throw-d20-button").addEventListener("click", 
        function() { 
            throwD20(1); 
            updateD20ModeLabel("");
         });
    document.getElementById("throw-d20-with-advantage-button").addEventListener("click", 
        function() { 
            throwD20(2, advantageThrowModeValue); 
            updateD20ModeLabel("с преимуществом"); 
        });
    document.getElementById("throw-d20-with-disadvantage-button").addEventListener("click", 
        function() { 
            throwD20(2, disadvantageThrowModeValue); 
            updateD20ModeLabel("с помехой"); 
        });
}