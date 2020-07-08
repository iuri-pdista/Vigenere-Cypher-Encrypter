document.getElementById("mainForm").addEventListener("submit", event => {
        event.preventDefault();
        keySetter();
        UncryptedSetter();
        textPrinter();
    }
);

const Encrypt = {
    original: "IurI",
    key: "Guatura",
    encrypted: "QWERTY",
    encryptedChar: ["Sweet" , "Home" ,"Alabama"]
}

const encryption = (OriginalWord, key, OriginalWord_Lenght, Key_lenght) => {
    let fdsa0 = new Array("Z", "e");
    let fdsa1 = new Array("Z", "e");
    let FinalResult = new Array("Z", "e");
    let count = 0;
    let count1 = 0;
    //Defines each char from the original word, ASCII value 
    for (count = 0; count < OriginalWord_Lenght; count++) {
        fdsa0[count] = OriginalWord.charCodeAt(count);
        fdsa0[count] -= 64;
    }
    //Defines each char from the key, ASCII value
    for (count = 0; count < Key_lenght; count++) {
        fdsa1[count] = key.charCodeAt(count);
        fdsa1[count] -= 64;
    }
    //Sums the values from the 2 arrays
    for (count = 0; count < OriginalWord_Lenght; count++) {
        FinalResult[count] = fdsa0[count] + fdsa1[count1];
        count1++;
        if (FinalResult[count] > 26) {
            FinalResult[count] -= 26;
        }

        if (count1 == Key_lenght) {
            count1 = 0;
        }
    }
    Encrypt.encryptedChar = charEncryption(FinalResult);
    return FinalResult;
}

const charEncryption = (numericEncrypted) => {
    let charEncrypted = new Array("Z", "e");
    for (let i = 0; i < numericEncrypted.length; i++){
        charEncrypted[i] = alphabet(numericEncrypted[i]);          
    }
    charEncrypted = charEncrypted.toString();
    return charEncrypted;
}

const keySetter = () => {
    let keyValue = document.getElementById("KeyInput").value;
    let keyValueArray = keyValue.split(" ");
    let arrayLenght = keyValueArray.length;
    console.log(arrayLenght);
    if (arrayLenght != 1){
        akert("The key must contain only alphabetic characters");
    }
    console.log(keyValue.toString().trim());
    Encrypt.key = keyValue;
    console.log(Encrypt.key);
}

function UncryptedSetter() {
    let UncryptedValue = document.getElementById("UncryptedInput").value;
    UncryptedValue.trim()
    console.log(UncryptedValue)
    Encrypt.original = UncryptedValue;

    let FINAL_ENCRYPTED = new Array("");
    FINAL_ENCRYPTED = encryption(
        Encrypt.original.toString().toUpperCase(),
        Encrypt.key.toString().toUpperCase(),
        Encrypt.original.length,
        Encrypt.key.length
    );
    let final_enrypted = "";
    for (let i = 0; i < FINAL_ENCRYPTED.length; i++) {
        if ((i != 0) && (i != FINAL_ENCRYPTED.length)) {
            final_enrypted += "/";
        }
        if((i % 10) == 0){
            final_enrypted += "<br>";
        }
        final_enrypted += FINAL_ENCRYPTED[i];
    }
    Encrypt.encrypted = final_enrypted;
    console.log(final_enrypted);
}

textPrinter = () =>{
    let favicon = document.getElementById("favicon");
    favicon.href = "assets/opened.ico";
    let encryptedTextDiv = document.getElementById("EncryptedDiv");
    let encryptedDiv = document.getElementById("encDiv");
    let btnPopUp = document.getElementById("btnPopUp");
    encryptedTextDiv.style.fontSize = "smaller";
    if (Encrypt.encrypted.length >= 50){
        btnPopUp.style.marginBottom = "8rem";
    }
    if (Encrypt.encrypted.length <= 30){
        encryptedTextDiv.style.fontSize = "larger"
    }
    encryptedTextDiv.innerHTML = "<h6>Numeric form: " + Encrypt.encrypted;
    let encryptedForm = document.getElementById("encryptionForm");
    encryptedForm.reset();
    encryptedDiv.classList.remove("hide");
}

textChanger = () =>{
    let encryptedTextDiv = document.getElementById("EncryptedDiv");
    let encryptedDiv = document.getElementById("encDiv");
    favicon.href = "assets/opened.ico";
    /*let encryptedCharArray = Encrypt.encryptedChar.split(",");
    for (let i = 0; i < encryptedCharArray.length; i++){
        Encrypt.encryptedChar += encryptedCharArray[i];
    }*/
    encryptedTextDiv.innerHTML = " <h6>String  form: " + "<br>" + Encrypt.encryptedChar;
    encryptedDiv.classList.remove("hide");
    encryptedForm.reset();
}

popUpCloser = () => {
    let encryptedDiv = document.getElementById("encDiv");
    encryptedDiv.classList.add("hide");
    let favicon = document.getElementById("favicon");
    favicon.href = "./assets/favicon.ico";
}

const alphabet = (position) => {
    switch(position){
        case 1:
            return "a";
        case 2:
            return "b";
        case 3:
            return "c";
        case 4:
            return "d";
        case 5:
            return "e";
        case 6:
            return "f";
        case 7:
            return "g";
        case 8:
            return "h";
        case 9:
            return "i";
        case 10:
            return "j";
        case 11:
            return "k";
        case 12:
            return "l";
        case 13:
            return "m";
        case 14:
            return "n";
        case 15:
            return "o";
        case 16:     
            return "p";   
        case 17:
            return "q";
        case 18:
            return "r";
        case 19:
            return "s";
        case 20:
            return "t";
        case 21:
            return "u";
        case 22:
            return "v";
        case 23:
            return "w";
        case 24:
            return "x";
        case 25:
            return "y";
        case 26:
            return "z";
    }        
}
