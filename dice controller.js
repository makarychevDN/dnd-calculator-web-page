window.onload = function() {
    document.getElementById("throw-d20-button").addEventListener("click", throwDice);
}

function throwDice(){
    let dice = new Dice(20);
    alert(dice.roll());
}