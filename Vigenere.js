const Encrypt = {
    original: "IurI",
    key: "Guatura",
    encrypted: "QWERTY"
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
        if (count1 == Key_lenght) {
            count1 = 0;
        }
    }
    return FinalResult;
}
Encrypt.original = prompt("Digit a word to be ENCRYPTED");
let FINAL_ENCRYPTED = new Array(null);
FINAL_ENCRYPTED = encryption(Encrypt.original.toUpperCase(), Encrypt.key.toUpperCase(), Encrypt.original.length, Encrypt.key.length);
document.write(FINAL_ENCRYPTED);