import { Encrypt, encryption } from "./Vigenere";
export const UncryptedSetter = () => {
    /*let UncryptedValue = document.getElementById("UncryptedInput");
    UncryptedValue = UncryptedValue.value();
    Encrypt.original = UncryptedValue.trim();*/
    Encrypt.original = "Eai pessoal aqui quem fala eo edu"
    alert(Encrypt.original);
    return Uncrypted
}
let FINAL_ENCRYPTED = new Array("");
FINAL_ENCRYPTED = encryption(Encrypt.original.toUpperCase(), Encrypt.key.toUpperCase(), Encrypt.original.length, Encrypt.key.length);
document.write(FINAL_ENCRYPTED);