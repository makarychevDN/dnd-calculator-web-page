let currentCharacter;

loadCharacter();

function loadCharacter(){
    let loadedCharacterAsJson = loadCharacterJson(); 
    currentCharacter = parseJsonToCharacter(loadedCharacterAsJson);
}

function parseJsonToCharacter(json){
    let characterAsObject = JSON.parse(json);
    fieldsOfObject = Object.values(characterAsObject);
    let characterAsInstanceOfClass = new Character(...fieldsOfObject);    
    return characterAsInstanceOfClass;
}

function loadCharacterJson(){
    //todo make it work like it is supposed to
    return JSON.stringify(new Character(20, 10, 16, 8, 12, 10)); 
}