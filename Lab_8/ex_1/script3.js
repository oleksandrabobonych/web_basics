function encrypt(number) {
    return number *4-6 ;
}
function decrypt(number) {
    return (number+6)/4;
}
var originalNumber = 2;
var encryptedNumber = encrypt (originalNumber);
var decryptedNumber = decrypt (encryptedNumber);
console.log ("Оригінальне число", originalNumber);
console.log ( "Зашифроване число", encryptedNumber);
console.log ("Дешифроване число:", decryptedNumber);