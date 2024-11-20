window.onload = function() {
    document.getElementById("throw-d20-button").addEventListener("click", function() { throwD20(1) });
    document.getElementById("throw-d20-with-advantage-button").addEventListener("click", function() { throwD20(2, 1) });
    document.getElementById("throw-d20-with-disadvantage-button").addEventListener("click", function() { throwD20(2, -1) });
}