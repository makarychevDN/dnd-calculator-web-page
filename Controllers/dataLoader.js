loadCharacter();

function loadCharacter(){
    let loadedCharacterAsJson = loadCharacterJson(); 
    currentCharacter = parseJsonToCharacter(loadedCharacterAsJson);
    let onCurrentCharacterIsSetted = new CustomEvent("characterIsSetted", {detail: {character : currentCharacter }});
    dispatchEvent(onCurrentCharacterIsSetted);
}

function parseJsonToCharacter(json){
    let characterAsObject = JSON.parse(json);
    fieldsOfObject = Object.values(characterAsObject);
    let characterAsInstanceOfClass = new Character(...fieldsOfObject);    
    return characterAsInstanceOfClass;
}

function loadCharacterJson(){
    //todo make it work like it is supposed to
    return JSON.stringify(
        new Character(
            20, 11, 16, 8, 12, 9, 5, 
            3, 
            18, 12, 
            {
                "золото" : 9,
                "серебро" : 23,
                "золото" : 14,
            }
    )); 
}