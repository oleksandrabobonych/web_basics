function addLargeNumbers(num1, num2) {
 let arr1 = num1.split('').reverse();
 let arr2 = num2.split('').reverse();
 let result = [];
 let carry = 0;
 let maxLength = Math.max(arr1.length, arr2.length);
 for (let i = 0; i < maxLength; i++) {
let digit1 = i < arr1.length ? parseInt(arr1[i]) : 0;
let digit2 = i < arr2.length ? parseInt(arr2[i]) : 0;
let sum = digit1 + digit2 + carry;
carry = Math.floor(sum / 10); 
result.push(sum % 10);
 }
   if (carry > 0) {
    result.push(carry);
}
return result.reverse().join('');
}
let number1 = "234457898764394762339865432";
let number2 = "567483921745378265345473838";

console.log("Сума:", addLargeNumbers(number1, number2));